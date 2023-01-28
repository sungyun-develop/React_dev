import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import styled from "./App.module.css";

function App() {
  return (
    <div className={styled.background}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/hello">
            <h1>Hello React</h1>
          </Route>
          <Route path="/movie/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
