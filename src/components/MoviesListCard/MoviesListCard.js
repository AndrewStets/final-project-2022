import {poster} from "../../configs";
import css from './movieCard.module.css'
import {NavLink} from "react-router-dom";

function MoviesListCard({movie}) {
  const {title, poster_path, release_date, id} = movie;


  return (
    <div className={css.movieCard}>
        <NavLink to={`/movies/${id}`} state={{...movie}}>
        <div className={css.photo}>
            <img src={`${poster}${poster_path}`} alt={title}/>
      </div>
        <div className={css.text}>
            <h3>{title}</h3>
            <p>{release_date}</p>
        </div>
        </NavLink>
        <hr/>
    </div>
  );
}

export {MoviesListCard};