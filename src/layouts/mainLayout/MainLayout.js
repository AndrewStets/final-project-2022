import {MoviePage} from "../../pages";
import css from './layout.module.css';

function MainLayout() {

  return (
    <div className={css.layout}>
    <MoviePage/>
    </div>
  );
}

export {MainLayout};