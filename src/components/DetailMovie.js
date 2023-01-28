import PropTypes from "prop-types";
import styled from "./DetailMovie.module.css";

function DetailMovie({ coverImg, title, year, downloadCount }) {
  return (
    <div>
      <img src={coverImg} alt="title" />
      <h2 className={styled.title}>{title}</h2>
      <p>{year}</p>
      <span>{`total download 수 : ${downloadCount}`} </span>
    </div>
  );
}

DetailMovie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  downloadCount: PropTypes.number.isRequired,
};

export default DetailMovie;
