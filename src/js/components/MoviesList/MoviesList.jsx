import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class MoviesList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { movies} = this.props;
        return (
            <div className='card'>
                <div className='card-body'>
                    <ul className="separator">
                        {movies.map((movie) => {
                            const { imdbID, Year, Title } = movie;
                            return <div>
                                <li className='list-group-item' key={imdbID}>
                                    <text>{Title}</text>
                                    <div
                                        className='pull-right'>{Year}
                                    </div>
                                    <Link
                                        id={imdbID}
                                        to={`movie/${imdbID}`}
                                        className='btn btn-primary pull-right'> More Information
                                    </Link>
                                </li>
                            </div>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}