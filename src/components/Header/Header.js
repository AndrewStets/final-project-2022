import {useState} from "react";
import {Link} from 'react-router-dom'

import {Genres} from "../Genres/Genres";
import css from './header.module.css';
import {SearchForm} from "../SearchForm/SearchForm";

function Header() {

    const [value,setValue] = useState();
    const refresh = ()=>{
        setValue({})}

    const changeTheme = () => {
        const theme = localStorage.getItem("theme");

        if (theme !== "dark") {
            localStorage.setItem("theme", "dark");
            document.body.classList.add("dark")
        } else {
            localStorage.removeItem("theme");
            document.body.classList.remove("dark")
        }
    }

  return (
    <div>
        <div>
            <Link  to={'/'} onClick={{refresh}}>HOME</Link>
                <button onClick={changeTheme}>Theme</button>
                    <div className={css.all_header}>
                        <SearchForm/>
                    {/*<input type={'text'} name={'search film'} placeholder={'Search'}/>*/}
                    </div>
            <div>
                <Genres/>
            </div>
      </div>
    </div>
  );
};

export {Header}