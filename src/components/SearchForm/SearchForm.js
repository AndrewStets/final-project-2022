import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux/slices";


function SearchForm() {

    const {register,handleSubmit,reset} = useForm();

    const {movieName} = useSelector(state => state.movies);

    const {results} = movieName;

    useSearchParams()

    const dispatch = useDispatch();

    const submit = ({film}) => {
        dispatch(movieActions.getMovieName(film))
        reset()
    };

  return (
    <form onSubmit={handleSubmit(submit)}>
    <input type={"text"} {...register('film')}/>
    {/*<button disabled={!register}>QWE</button>*/}
    </form>
  );
}

export {SearchForm};






//
// import {useSearchParams} from "react-router-dom";
// import {useSelector} from "react-redux";
//
// function SearchForm() {
//
//     const {movies,movieName1} = useSelector(state => state.movies);
//     const {results} = movies;
//     const {title} = results;
//     console.log(title)
//
//     useSearchParams()
//
//   return (
//     <form>
//     SearchForm
//     </form>
//
//   );
// }
//
// export {SearchForm};


