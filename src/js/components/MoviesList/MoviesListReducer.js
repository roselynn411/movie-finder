const defaultState = {
    movieDetails: []
};

export default function moviesListReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'GET_MOVIE_DETAILS_FULFILLED': {
            return {
                ...state,
                movieDetails: payload.data
            };
        }
        default: {
            return state;
        }
    }
}