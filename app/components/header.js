import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import AddMovie from './add_movie.js';

export default class Header extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-page-header bg-primary">
        <h1 className="text-center">Movie Maddness</h1>
      </nav>
    )
  }
}