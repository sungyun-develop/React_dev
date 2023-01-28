import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styled from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [listMovie, setListMovie] = useState([]);
  const [range, setRange] = useState(8.5);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=${range}&sort_by=year`
      )
    ).json();
    setListMovie(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  useEffect(() => {
    getMovies();
    console.log("change");
  }, [range]);
  const onChange = (event) => setRange(event.target.value);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className={styled.menu}>
            <h1 className={styled.menu_title}>MovieTube</h1>
            <span>평점? :</span>
            <input
              type="range"
              min="0"
              max="10"
              value={range}
              onChange={onChange}
            ></input>
          </div>
          <div className={styled.container}>
            {listMovie.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
                genres={movie.genres}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
