import {axiosService} from "./axios.service";

import {urls} from "../configs";

const movieService = {
    getAll: (page=1) => axiosService.get(urls.movies,{params:{page}}),
    getMovie:(genreID,page=1)=>
        axiosService.get(urls.getMovieByGenres,{params:{with_genres:`${genreID}`,page}}),
    // searchMovie:(name)=> axiosService.get(urls.searchMovie,name)
    searchMovie1:(name,page=1)=>
        axiosService.get(urls.searchMovie1,{params:{query:`${name}`,page}})
};

export {
    movieService
};