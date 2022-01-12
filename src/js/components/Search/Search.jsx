import React, { Component } from 'react';
import { searchMovies, updateUserQuery } from './searchActions';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.handleSearchMovies = this.handleSearchMovies.bind(this);
        this.handleUpdateUserQuery = this.handleUpdateUserQuery.bind(this);
    }

    handleSearchMovies() {
        const { dispatch, query } = this.props;
        dispatch(searchMovies(query));
    }

    handleUpdateUserQuery(event) {
        event.preventDefault();
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateUserQuery(value));
    }

    render() {
        const { query } = this.props;
        return (
            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <div className='input-group'>
                    <input id='query' name='query' type='text' className='form-control'  onChange={this.handleUpdateUserQuery}></input>
                    <div className='input-group-append'>
                        <button className='btn btn-outline-secondary' id='search' type='button' onClick={this.handleSearchMovies}>Go!</button>
                    </div>
                </div>
            </div>
        )
    }
}
