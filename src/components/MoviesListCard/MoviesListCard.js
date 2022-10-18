import {poster} from "../../configs";
import css from './movieCard.module.css'

function MoviesListCard({movie}) {
  const {title, poster_path, release_date} = movie;


  return (
    <div className={css.movieCard}>
      <div className={css.photo}>
            <img src={`${poster}${poster_path}`} alt={title}/>
      </div>
        <div className={css.text}>
            <h3>{title}</h3>
            <p>{release_date}</p>
        </div>
        <hr/>
    </div>
  );
}

export {MoviesListCard};