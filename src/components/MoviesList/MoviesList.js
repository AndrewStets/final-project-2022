import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {movieActions} from "../../redux/slices";
import css from './movies.module.css'


function MoviesList() {

  const {movies, loading} = useSelector(state => state.movies);
  const {results} = movies;

  const dispatch = useDispatch();

  const [query, setQuery] = useSearchParams({page: '1'});

  const page = query.get('page');

  useEffect(() => {
    dispatch(movieActions.getAll({page}))

  }, [page]);

  const prevPage = () => {
    const prev = +page - 1;
    if (prev >= 1) {
      setQuery({page: `${prev}`})
    }
  };

  const nextPage = () => {
    const next = +page + 1;
    if (next >= 1) {
      setQuery({page: `${next}`})
    }
  };

  return (
    <div>
      <div className={css.pagin}>
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
      </div>
      <div className={css.movies}>
            {results?.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  );
}

export {MoviesList};






  // useEffect(() => {
  //   // movieService.getAll(query.get('page')).then(({data})=>{setVo(data.results)})
  //     dispatch(movieActions.getAll({page}))
  //   // setPrev(results.page)
  //   // setNext(results.page)
  // },[page]);

  // const prevPage = () => {
  //   setQuery(value => ({page: value.get('page') - 1}))
  // };
  //
  // const nextPage = () => {
  //   setQuery(value => ({page: +value.get('page') + 1}))
  // };
