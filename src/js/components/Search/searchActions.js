import axios from 'axios';

export function updateUserQuery(query) {
    return {
        type: 'UPDATE_USER_QUERY',
        payload: query
    };
}

export function searchMovies(query) {
    return {
        type: 'SEARCH_MOVIES',
        payload: axios.get(`/movies/${query}`)
    };
}