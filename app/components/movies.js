import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import AddMovie from './add_movie.js'

export default class Movies extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			term: ''
		};
	};
	render() {
		var movies = this.filterMovies(this.props.movies, this.state.term)
		return (
			<div>
				<div>
					<div className="container">
						<AddMovie movies={ this.props.movies }/>
					</div>
					<span className="glyphicon glyphicon-search"></span>
					<input value={ this.state.term } onChange={ (e) => this.setState({ term: e.target.value })} />
				</div>
				{
					movies.map( (movie, i) => {
						return (
							<div className="col-sm-6 col-md-3" key={ i }>
								<div className="panel panel-info">
									<div className="panel-heading">
             							<h4 className="panel-title">{ movie.title }</h4>
            						</div>
            						<div className="panel-body">
							 			<h2>{movie.genre}</h2>
							 			<h4>Year:</h4>
							 			<p>{movie.year}</p>
							 			<h4>Rating:</h4>
							 			<p>{movie.rating}</p>
							 			<h4>Actors:</h4>
							 			<ul>
							 			{	
							 				movie.actors.map( (actor, i) => {
							 					return (<li key={ i }>{ actor }</li>)
							 				})
							 			}
							 			</ul>
							 		</div>
							 	<div className="panel-footer">
							 		<Button className="btn btn-danger btn-xs" onClick={ () => console.log('delete')  }>Delete</Button>
							 	</div>
							</div>	
						</div>
						)
					})
				}
			</div>
		)
	}
	filterMovies(movies,term) {
		return movies.filter( function(movie) {
			return ( movie.title.toLowerCase().includes(term.toLowerCase()) || movie.genre.toLowerCase().includes(term.toLowerCase()) )
		})
	}
}