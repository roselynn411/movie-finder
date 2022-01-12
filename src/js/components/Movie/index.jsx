import { connect } from 'react-redux';
import  Movie  from './Movie';

function mapStoreToProps(store) {
    const { moviesList } = store;
    const { movieDetails } = moviesList;
    const { Title, Year, Runtime, Genre, Plot, Awards, Metascore, imdbID, imdbRating} = movieDetails;
    return {
        title: Title,
        year: Year,
        time: Runtime,
        genre: Genre,
        plot: Plot,
        awards: Awards,
        metaScore: Metascore,
        imdbVotes: imdbRating,
        imdbID: imdbID
    };
}

export default connect(mapStoreToProps)(Movie);