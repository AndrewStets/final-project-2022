import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams, useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {movieActions} from "../../redux/slices";
import css from './movies.module.css'

function MoviesList() {

  const {movies, loading} = useSelector(state => state.movies);
  const {results} = movies;

  const dispatch = useDispatch();
  const {id:genreID} = useParams();

  const [query, setQuery] = useSearchParams({with_genres:genreID,page: '1'});

  const with_genres = query.get('with_genres');
  const page = query.get('page');

  useEffect(() => {
    dispatch(movieActions.getAllMovies({page}))

  }, [page]);

  console.log(typeof genreID);
  // const {state} = useLocation();
  // console.log(state);

  useEffect(() => {
    dispatch(movieActions.getMovieByGenre({with_genres,page}))

  },[genreID,page]);

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






//
// function MoviesList() {
//
//   const {movies, loading} = useSelector(state => state.movies);
//   const {results} = movies;
//
//   const {genres} = useSelector(state => state.genres);
//   // const {genre} = genres;
//
//   const {id:genreID} = useParams();
//
//   const dispatch = useDispatch();
//
//   const [query, setQuery] = useSearchParams({with_genres: `${genreID}`, page: '1'});
//
//   const with_genres = query.get('with_genres');
//
//   const page = query.get('page');
//
//   useEffect(() => {
//     dispatch(movieActions.getAllMovies({page}))
//   }, [page]);
//
//   // const [genre,setGenre] = useState('');
//
//   // const getMByGenre = (event) => {
//   //   setGenre(event.target.value)
//   //   console.log(setGenre(event.target.value));
//   // };
//
//   useEffect(() => {
//     dispatch(movieActions.getMovieByGenre({with_genres,page}))
//   },[genreID,page]);
//
//   const prevPage = () => {
//     const prev = +page - 1;
//     if (prev >= 1) {
//       setQuery({page: `${prev}`})
//     }
//   };
//
//   const nextPage = () => {
//     const next = +page + 1;
//     if (next >= 1) {
//       setQuery({page: `${next}`})
//     }
//   };
//
//   return (
//     <div>
//         <div className={css.pagin}>
//           <button onClick={prevPage}>Prev</button>
//           <button onClick={nextPage}>Next</button>
//         </div>
//           <div>
//             {/*{genres?.genres.map(genre=>*/}
//             {/*    <button key={genre.id} onClick={()=>getMByGenre(genre.id)} className={css.btn}>{genre.name}</button>)}*/}
//           </div>
//             {/*{loading && <h2>Loading....................</h2>}*/}
//         <div className={css.movies}>
//               {results?.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
//         </div>
//     </div>
//   );
// }
//
// export {MoviesList};
//
//
//






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
