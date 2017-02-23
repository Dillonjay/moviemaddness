import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class Movies extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		};
	};
	render() {
		var movies = this.props.movies;
		return (
			<div>
				{
					movies.map( (movie, i) => {
						return (
							<div key={i}>
								{movie.title}
							</div>
						)
					})
				}
			</div>
		)
	}
}