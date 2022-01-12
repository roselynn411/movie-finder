import axios from 'axios';
// const axios = require('axios');

export function getMovieDetails(id) {
    return {
        type: 'GET_MOVIE_DETAILS',
        payload: axios.get(`/movie/${id}`)
    };
}
