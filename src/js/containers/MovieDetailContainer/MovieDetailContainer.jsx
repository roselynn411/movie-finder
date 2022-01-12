import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
// import {  useParams } from 'react-router';
import { getMovieDetails } from './MovieDetailContainerActions';

export default class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    let id = this.props.match.params.id;
    dispatch(getMovieDetails(id));
  }

  render() {
    const { movieDetails } = this.props;
    console.log("cats", movieDetails);

    return (
      <div>
        <Header />
        {/* <Movie /> */}
        <div className='card'>
          <div className='card-header text-white bg-primary mb-3'>Movie Details</div>
          <div className='card-body'>
            <Link to="/" className="pull-left btn btn-primary">Go Back</Link>
            <br />
            <div className='card'>
              <div className='card-body'>
                <h3>{movieDetails.Title}</h3>
                <p>{movieDetails.Year}</p>
                <p>{movieDetails.Runtime}</p>
                <p>{movieDetails.Genre}</p>
                <h6>{" "}</h6>
                <p>{movieDetails.Plot}</p>
                <br />
                <p>{movieDetails.Awards != "N/A" ? movieDetails.Awards : " "}</p>
                <p>
                  <span><b>Metascore:</b> {movieDetails.MetaScore}/100</span>
                  <br />
                  <span><b>IMDB:</b> {movieDetails.imdbRating}/10</span>
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>
    )
  }
}