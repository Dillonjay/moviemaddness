import React from 'react';
import Movies from './movies.js';


export default class Main extends React.Component {
	render() {
		console.log('this.props.movies', this.props.movies)
		return (
			<div>
				<Movies movies={this.props.movies} />
			</div>
		)
	}
}