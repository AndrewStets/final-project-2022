import {MainLayout} from "./layouts";

function App() {
  return (
    <div>
      <MainLayout/>
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