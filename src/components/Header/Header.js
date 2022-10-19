import {Genres} from "../Genres/Genres";
import css from './header.module.css';

function Header() {

  return (
    <div>
      <div className={css.all_header}>
      <input type={'text'} name={'search film'} placeholder={'Search'}/>
      </div>
      <Genres/>
    </div>
  );
}

export {Header};