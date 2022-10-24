import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviePage} from "./pages";
import {MovieInfo} from "./components";
import {useEffect} from "react";

function App() {

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            document.body.classList.add("dark")
        }
    }, []);

  return (
    <div>
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviePage/>}/>
                <Route path={'movies/:id'} element={<MovieInfo/>}/>
                <Route path={'/genre/:id'} element={<MoviePage/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;



// ) Components:
//     - Header
//     - MoviesList (renders MoviesListCards)
// - MoviesListCard (contain all movie information)
// - PosterPreview (movie image)
// - StarsRating
// - MovieInfo (contains label, description, badges)
// - GenreBadge
// - UserInfo (just hardcoded small circle and name)
// 4) Containers:
//     - MoviesPage