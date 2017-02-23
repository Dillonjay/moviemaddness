import React from 'react';
import Movies from './movies.js';
import AddMovie from './add_movie.js';

export default class Main extends React.Component {
	render() {
		console.log('this.props.movies', this.props.movies)
		return (
			<div>
			{ 
				this.props.movies.length 
				?
				<div>
					<Movies movies={ this.props.movies } />
				</div>
				:
				<div>
					<h1>You currently have no movies to display.</h1>
					<h1>Want to add one ?</h1>
					<AddMovie movies={ this.props.movies } />
				</div>
			}
			</div>
		)
	}
}