import axios from 'axios';

export function getMovieDetails(id) {
    return {
        type: 'GET_MOVIE_DETAILS',
        payload: axios.get(`/movie/${id}`)
    };
}


