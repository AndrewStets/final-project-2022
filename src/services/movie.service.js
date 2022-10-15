import {axiosService} from "./axios.service";

import {urls} from "../configs";

const movieService = {
    getAll: () => axiosService.get(urls.movies),
    getById:(id)=>axiosService.get(`${urls.movie}/${id}`)
};

export {
    movieService
};