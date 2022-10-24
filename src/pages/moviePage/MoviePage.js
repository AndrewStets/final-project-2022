import {Genre, MoviesList} from "../../components";
import css from './MoviePage.module.css';

function MoviePage() {

  return (
      <div>
          <div className={css.moviePage}>
              <MoviesList/>
          </div>
      </div>
  );
}

export {MoviePage};