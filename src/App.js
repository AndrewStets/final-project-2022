import {MainLayout} from "./layouts";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={''}></Route>
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