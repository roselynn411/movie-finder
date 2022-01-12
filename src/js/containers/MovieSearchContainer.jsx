import React from 'react';
import Search from '../components/Search';
import MoviesList from '../components/MoviesList';
import Header from '../components/Header';

export default class MovieSearchContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<Search />
				<MoviesList />
			</div>
		)
	}
}