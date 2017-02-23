import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class AddMovie extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			show: false
		}
	}
	render() {
		return (
			<div className="modal-container col-sm-4">
				<Button className="btn btn-info btn-lg" onClick={ () => this.setState({ show: true }) }>
					Add Movie
				</Button>
				<Modal show={ this.state.show } onHide={ () => this.setState({ show: false }) } container={ this } aria-labelledby="contained-modal-title">
					<Modal.Header closeButton>
						<Modal.Title>Add Movie</Modal.Title>
					</Modal.Header>
				</Modal>
			</div>
		)
	}
}