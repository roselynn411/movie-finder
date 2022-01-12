import React,  {Component } from 'react';
import  {Link}  from 'react-router-dom';


export default class Movie extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            title,
            year,
            time,
            genre,
            plot,
            awards,
            metaScore,
            imdbVotes
        } = this.props;

 

        return (
            <div className='card'>
                <div className='card-header text-white bg-primary mb-3'>Movie Details</div>
                <div className='card-body'>
                    <Link to="/" className="pull-left btn btn-primary">Go Back</Link>
                    
                    <p className="text-center text-success font-weight-bold">{title}</p>
                    <p className="text-center text-success font-weight-bold">{year}</p>
                    <p className="text-center text-success font-weight-bold">{time}</p>
                    <p className="text-center text-success font-weight-bold">{genre}</p>
                    <p className="text-center text-success font-weight-bold">{plot}</p>
                    <p className="text-center text-success font-weight-bold">{awards}</p>
                    <p className="text-center text-success font-weight-bold">{metaScore}</p>
                    <p className="text-center text-success font-weight-bold">{imdbVotes}</p>
                </div>
            </div>
        );
    }
}

// export default withRouter(Movie);