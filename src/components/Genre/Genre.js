import css from './genre.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

function Genre({genre}) {

    const {name,id} = genre;
    // const navigate = useNavigate();

    const dispatch = useDispatch();

  return (
    <div className={css.btn}>
        <NavLink to={`/genre/${genre.id}`} state={{...genre}} onClick={()=>dispatch()} className={css.link_btn} >{name}</NavLink>
        {/*<button onClick={()=>navigate(`/genre/${genre.id}`.toString(), {state:{...genre}})} className={css.link_btn} >{name}</button>*/}
    </div>
  );
}

export {Genre};

