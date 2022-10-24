import {useLocation} from "react-router-dom";

import css from './MovieInfo.module.css';

function MovieInfo() {

  const location = useLocation();

  const {state:movie} = location;

  return (
    <div className={css.movie_info}>
        <div className={css.about_movie}>
            <h1>{movie.title}</h1>
            <div className={css.all_ellem}>
                <div className={css.text}>
                    <p>Overview</p>
                    <h2>{movie.overview}</h2>
                    <h2>Original language: {movie.original_language}</h2>
                    <h2>Vote: {movie.vote_count}</h2>
                    <div className={css.imdb_el}>
                        <img className={css.imdb}
                             src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                             alt={movie.vote_average}/>
                        <h1>{movie.vote_average}</h1>
                    </div>
                </div>
                    <div className={css.movie_post}>
                        <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}/>
                    </div>
            </div>
        </div>
    </div>
  );
}

export {MovieInfo};