import Button from "./Button";
import styled from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }

    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  const deleteClick = (event) => {
    event.preventDefault();
    const idx = event.target.id;
    console.log(idx);
    setToDos((currentArray) =>
      currentArray.filter((item) => {
        return item != idx;
      })
    );
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length}) </h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your To-Do"
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <form key={index}>
          <li className={styled.list}>{item}</li>
          <button id={item} onClick={deleteClick}>
            delete
          </button>
        </form>
      ))}
    </div>
  );
}

export default App;
