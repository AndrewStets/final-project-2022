import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {genreAction} from "../../redux/slices";
import {Genre} from "../Genre/Genre";
import css from './genres.module.css';

function Genres() {

    const {genres} = useSelector(state => state.genreReducer);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreAction.getAll())
    },[]);

    return (
        <div className={css.all_genres}>
            {
                genres?.genres.map(genre => <Genre key={genre.id} genre={genre}/>)
            }
        </div>
    );
}

export {Genres};