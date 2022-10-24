import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {NavLink} from "react-router-dom";

import {genreAction} from "../../redux/slices";
import css from './genres.module.css';
import {Genre} from "../Genre/Genre";

function Genres() {

    const {genres} = useSelector(state => state.genres);

    const dispatch = useDispatch();

    // const navigate = useNavigate();

    useEffect(() => {
        dispatch(genreAction.getAll())

    },[]);

    return (
        <div className={css.all_genres}>
             {
                genres?.genres.map(genre =>
                    <Genre key={genre.id} genre={genre}/>)
            }
        </div>
    );
}

export {Genres};


// <Genre key={genre.id} genre={genre}/>





// genres?.genres.map(genre =>
//     <NavLink to={`/genre/${genre.id}`}><button key={genre.id}
//         // onClick={()=> {navigate(genre.id)}}
//                                                className={css.btn}>{genre.name}</button></NavLink> )




// const [genre,setGenre] = useState(null);
//
// const getMByGenre = (event) => {
//     setGenre(event.target.value)
//     console.log(setGenre(event.target.value));
//
// };
//
// const [query, setQuery] = useSearchParams({with_genres: `${genre.id}`, page: '1'});
//
// const [genreID,page] = query.get(`with_genres${genre.id}`,'page');
//
// useEffect(() => {
//     dispatch(genreAction.getMovieByGenre({page}))
//
// },[genreID,page]);