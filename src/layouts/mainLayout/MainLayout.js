import {MoviePage} from "../../pages";
import css from './layout.module.css';
import {Header} from "../../components";
import {Outlet} from "react-router-dom";

function MainLayout() {

  return (
    <div className={css.layout}>
    <MoviePage/>
      <Header/>
      <Outlet/>
    </div>
  );
}

export {MainLayout};