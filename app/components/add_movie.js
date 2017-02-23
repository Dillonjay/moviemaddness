import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class AddMovie extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			show: false,
			title: '',
			genre: '',
			rating: '',
			year: '',
			actors: ''
		}
	}
	render() {
		return (
			<div className="modal-container col-md-auto">
				<Button className="btn btn-info btn-lg" onClick={ () => this.setState({ show: true }) }>
					Add Movie
				</Button>
				<Modal show={ this.state.show } onHide={ () => this.setState({ show: false }) } container={ this } aria-labelledby="contained-modal-title">
					<Modal.Header closeButton>
						<Modal.Title>Add Movie</Modal.Title>
					</Modal.Header>
					<Modal.Body>
                  		<form onSubmit={ () => this.add(this.state) }> 
                  			<input className="col-xs-3"  value={this.state.title} placeholder="Title" onChange={ (e) => this.setState({ title: e.target.value }) } required/>
                  			<input className="col-xs-3"  value={this.state.genre} placeholder="Genre" onChange={ (e) => this.setState({ genre: e.target.value }) } required/>
                  			<input className="col-xs-2" type="number" min="1" max="5" value={this.state.rating} placeholder="Rating" onChange={ (e) => this.setState({ rating: e.target.value }) } required/>
                  			<input className="col-xs-2" type="number" value={this.state.year} placeholder="Year" onChange={ (e) => this.setState({ year: e.target.value }) } required/>
                  			<input className="col-xs-3"  value={this.state.actors} placeholder="Actors" onChange={ (e) => this.setState({ actors: e.target.value }) } required/>
                  			<br/>
                  			<Button type="submit"> Add </Button>
                  		</form>
               		</Modal.Body>
               		<Modal.Footer>
                  		<Button className="btn btn-primary" onClick={ () => this.setState({ show: false }) }>Close</Button>
               		</Modal.Footer>
				</Modal>
			</div>
		)
	}
	add(info) {
		this.setState({ show: false })
		var there = this.props.movies.filter(function(movie){
			return (movie.title === info.title && movie.year === info.year)
		})
		if(there.length) {
			alert('Sorry, it looks like this movie has already been added.')
		} else {
			this.props.movies.push({ 
				title: info.title,
				genre: info.genre,
				rating: info.rating,
				year: info.year,
				actors: info.actors.split(',')
			});
			localStorage.removeItem('movies')
			localStorage.setItem('movies', JSON.stringify(this.props.movies));	
			this.setState({
				show: false,
				title: '',
				genre: '',
				rating: '',
				year: '',
				actors: ''	
			})	
			setTimeout(function(){
   			   window.location.reload();
			},100); 
		}
	}
}