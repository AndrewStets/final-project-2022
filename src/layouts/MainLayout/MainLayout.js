import {Outlet} from "react-router-dom";

import {Header} from '../../components';
import css from './Layout.module.css';

function MainLayout() {

  return (
    <div className={css.layout}>
      <Header/>
        <Outlet/>
    </div>
  );
}

export {MainLayout};