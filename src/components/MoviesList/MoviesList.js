import {useDispatch, useSelector} from "react-redux";

import {movieActions, movieReducer} from "../../redux";
import {useEffect} from "react";

function MoviesList() {

  let dispatch = useDispatch();

  let {movies} = useSelector(state => state.movieReducer);

  useEffect(() => {
      dispatch(movieActions.getAll())
  },[]);

  return (
    <div>
      {
      }
    </div>
  );
}

export {MoviesList};