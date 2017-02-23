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
							<div className='col-sm-6 col-md-3' key={ i }>
								<div className="panel panel-info">
									<div className="panel-heading">
             							<h4 className="panel-title">{ movie.title }</h4>
            						</div>
            						<div className="panel-body">
							 			<h2>{movie.genre}</h2>
							 			<h2>{movie.rating}</h2>
							 			<h2>{movie.year}</h2>
							 			<h2>Actors:</h2>
							 			<ul>
							 			{
							 				movie.actors.map( (actor, i) => {
							 					return (<li key={ i }>{ actor }</li>)
							 				})
							 			}
							 			</ul>
							 		</div>
							 	<div className="panel-footer">Footer. Delete Button Eventually</div>
							</div>	
						</div>
						)
					})
				}
			</div>
		)
	}
}