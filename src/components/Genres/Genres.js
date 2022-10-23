// import {useDispatch, useSelector} from "react-redux";
// import {useEffect, useState} from "react";
// import {useSearchParams} from "react-router-dom";
//
// import {genreAction} from "../../redux/slices";
// import {Genre} from "../Genre/Genre";
// import css from './genres.module.css';
//
// function Genres() {
//
//     const {genres} = useSelector(state => state.genres);
//
//     const dispatch = useDispatch();
//
//     useEffect(() => {
//         dispatch(genreAction.getAll())
//
//     },[]);
//
//     const [genre,setGenre] = useState(null);
//
//     const getMByGenre = (event) => {
//         setGenre(event.target.value)
//         console.log(setGenre(event.target.value));
//
//     };
//
//     const [query, setQuery] = useSearchParams({with_genres: `${genre.id}`, page: '1'});
//
//     const [genreID,page] = query.get(`with_genres${genre.id}`,'page');
//
//     useEffect(() => {
//         dispatch(genreAction.getMovieByGenre({page}))
//
//     },[genreID,page]);
//
//     return (
//         <div className={css.all_genres}>
//             {
//                 genres?.genres.map(genre =>
//                     <button key={genre.id} onClick={()=>getMByGenre(genre.id)} className={css.btn}>{genre.name}</button> )
//             }
//         </div>
//     );
// }
//
// export {Genres};


// <Genre key={genre.id} genre={genre}/>
