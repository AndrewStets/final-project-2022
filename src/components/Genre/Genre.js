import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

import css from './genre.module.css';

function Genre({genre}) {

    const {name,id} = genre;

    const dispatch = useDispatch();

  return (
    <div className={css.btn}>
        <NavLink to={`/genre/${genre.id}`} state={{...genre}} onClick={()=>dispatch()} className={css.link_btn} >{name}</NavLink>
    </div>
  );
}

export {Genre};

