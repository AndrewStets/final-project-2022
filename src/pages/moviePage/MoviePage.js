import {MoviesList} from "../../components";
import css from './MoviePage.module.css';

function MoviePage() {

  return (
    <div className={css.moviePage}>
    <MoviesList/>
    </div>
  );
}

export {MoviePage};