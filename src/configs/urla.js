const baseURL = 'https://api.themoviedb.org/3';

const poster = 'https://image.tmdb.org/t/p/w200'

const urls = {
    movies: '/discover/movie',
    movie: '/movies/:id',
    genres:'/genre/movie/list',
    searchMovie:'//search/movie'
};

export {
    baseURL,
    urls,
    poster
};