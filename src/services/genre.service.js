import {axiosService} from "./axios.service";

import {urls} from "../configs";

const genreService = {
    getAl: () => axiosService.get(urls.genres),
};

export {
    genreService
};