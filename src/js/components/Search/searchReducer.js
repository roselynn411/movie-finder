const defaultState = {
    query: '',
	movies: [],
};

export default function searchReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'UPDATE_USER_QUERY': {
            return {
                ...state, 
                query: payload
            }
        }
        case 'SEARCH_MOVIES_FULFILLED': {
            return {
                ...state,
                movies: payload.data.Search
            };
        }
        default: {
            return state;
        }
    }
}