import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "../movie.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Good Movie</h1>
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className={styles.nemo}>
            <div className={styles.scrollPath}></div>
            <div className={styles.progressbar}></div>
            {movies.map((movie) => (
              <Movie
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                rating={movie.rating}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

/*
1. switch로 점수에 따라 별모양으로나오게 하기 8.5
2. 클릭하면 포스터 커지게 하기
3. ...이거 누르면 나머지 보아게 하고 overflow: scroll이용하기
4. 
*/
