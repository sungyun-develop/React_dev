import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "./Movie.module.css";

function Movie({ id, coverImg, title, year, genres }) {
  return (
    <div className={styled.moviestyle}>
      <Link to={`/movie/${id}`}>
        <img className={styled.moviestyle_img} src={coverImg} alt="title" />
      </Link>
      <h2 className={styled.moviestyle_title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{year}</p>
      <ul className={styled.moviestyle_list}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
