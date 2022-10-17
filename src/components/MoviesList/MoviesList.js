import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {movieActions, movieReducer} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {movieService} from "../../services";


function MoviesList() {

  const [vo, setVo] = useState([]);

  const dispatch = useDispatch();

  const {movies, loading} = useSelector(state => state.movieReducer);

  const [query, setQuery] = useSearchParams({page: '1'});

  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);

  useEffect(() => {
    movieService.getAll(query.get('page')).then(({data})=>{setVo(data.results)})
      // dispatch(movieActions.getAll(query.get('page')))
    // setPrev(results.page)
    // setNext(results.page)
  },[]);

  const prevPage = () => {
    setQuery(value => ({page: value.get('page') - 1}))
  };

  const nextPage = () => {
    setQuery(value => ({page: +value.get('page') + 1}))
  };

  return (
    <div>
      {vo.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
      <div>
        <button disabled={!prev} onClick={prevPage}>prevPage</button>
        <button disabled={!next} onClick={nextPage}>nextPage</button>
      </div>
    </div>
  );
}

export {MoviesList};