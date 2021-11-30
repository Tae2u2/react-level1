import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../movie.module.css";

function Movie({ id, coverImg, title, rating, genres }) {
  return (
    <div className={styles.cardbox}>
      <img src={coverImg} className={styles.poster} alt={title} />

      <div className={styles.contentbox}>
        <h3 className={styles.hthree}>
          <Link to={`/movie/${id}`} className={styles.titleDeco}>
            {title}
          </Link>
        </h3>
        <h4 className={styles.hfour}>
          {rating > 9 ? `🥇${rating}🥇` : `🥈${rating}🥈`}
        </h4>
        {/* <p className={styles.summaryBox}>{summary}</p> */}
        <ul>
          {genres.map((g) => (
            <li className={styles.genresLine} key={g}>
              {g}
            </li>
          ))}
        </ul>
      </div>
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
