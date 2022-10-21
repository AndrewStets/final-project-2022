import css from './Layout.module.css';
import {Header} from "../../components";
import {Outlet} from "react-router-dom";

function MainLayout() {

  return (
    <div className={css.layout}>
      <Header/>
      <Outlet/>
    </div>
  );
}

export {MainLayout};