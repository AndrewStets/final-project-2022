import {NavLink} from "react-router-dom";

import {poster} from "../../configs";
import {StarRating} from "../StarsRating/StarsRating";
import css from './movieCard.module.css'
import {GanreBadge} from "../GenreBadge/GanreBadge";

function MoviesListCard({movie}) {
  const {title, poster_path, release_date, id} = movie;


  return (
    <div className={css.movieCard}>
        {/*<GanreBadge/>*/}
        <NavLink to={`/movies/${id}`} state={{...movie}}>
        <div className={css.photo}>
            <img src={`${poster}${poster_path}`} alt={title}/>
        </div>
        <div className={css.text}>
            <h4>{title}</h4>
            <p>{release_date}</p>
        </div>
        </NavLink>
        <div className={css.stars}>
            {<StarRating movie={movie}/>}
        </div>
    </div>
  );
}

export {MoviesListCard};