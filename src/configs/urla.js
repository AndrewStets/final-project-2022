const baseURL = 'https://api.themoviedb.org/3';

const urls = {
    movies: '/discover/movie',
    movie: '/movies/:id',
    genres:'/genre/movie/list',
    searchMovie:'//search/movie'
};

export {
    baseURL,
    urls
};