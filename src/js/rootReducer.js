import { combineReducers } from 'redux';
import searchReducer from './components/Search/searchReducer';
import movieDetailReducer  from './containers/MovieDetailContainer/movieDetailContainerReducer';

const rootReducer = combineReducers({
    search: searchReducer,
    movieDetails: movieDetailReducer
});

export default rootReducer;