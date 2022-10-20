import {NavLink} from "react-router-dom";

import {poster} from "../../configs";
import css from './movieCard.module.css'
import {StarRating} from "../StarsRating/StarsRating";

function MoviesListCard({movie}) {
  const {title, poster_path, release_date, id} = movie;


  return (
    <div className={css.movieCard}>
        <NavLink to={`/movies/${id}`} state={{...movie}}>
        <div className={css.photo}>
            <img src={`${poster}${poster_path}`} alt={title}/>
      </div>
        <div className={css.text}>
            <h4>{title}</h4>
            <h6>{release_date}</h6>
        </div>
        </NavLink>
        <div className={css.stars}>
            {<StarRating movie={movie}/>}
        </div>
        <hr/>
    </div>
  );
}

export {MoviesListCard};