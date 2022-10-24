import {axiosService} from "./axios.service";

import {urls} from "../configs";

const movieService = {
    getAll: (page=1) => axiosService.get(urls.movies,{params:{page}}),
    getMovie:(genreID,page=1)=>
        axiosService.get(urls.getMovieByGenres,{params:{with_genres:`${genreID}`,page}}),
    searchMovie:(name='film')=> axiosService.get(urls.searchMovie, {params:{name}})
};

export {
    movieService
};