// import {useForm} from "react-hook-form";
// import {useDispatch, useSelector} from "react-redux";
// import {movieActions} from "../../redux/slices";
//
//
// function SearchForm() {
//
//     const {register,handleSubmit,reset} = useForm();
//
//     const {movieName} = useSelector(state => state.movies);
//     const dispatch = useDispatch();
//
//     const submit = ({film}) => {
//         dispatch(movieActions.getMovieName({name:film}))
//         reset()
//     };
//
//   return (
//     <form onSubmit={handleSubmit(submit)}>
//     <input type={"text"} {...register('film')}/>
//     <button disabled={!register}>QWE</button>
//     </form>
//   );
// }
//
// export {SearchForm};




function SearchForm() {

  return (
    <div>
    SearchForm
    </div>

  );
}

export {SearchForm};


