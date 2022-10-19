import {useLocation} from "react-router-dom";

function MovieInfo() {

  const location = useLocation();

  const {state:movie} = location;

  return (
    <div>
      <div>
        <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}/>
      </div>
    </div>
  );
}

export {MovieInfo};