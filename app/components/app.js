import React from 'react';
import Main from './main.js';
import Dummy from '../dummy_data.js';
import Header from './header.js';

// To use pre made movie data, comment out lines 8 & 9.
// Then uncomment lines 12 & 13.

if(!localStorage.hasOwnProperty('movies')) localStorage.setItem('movies', JSON.stringify( [] ));
const Movies = JSON.parse( localStorage.getItem('movies') );

// if(!localStorage.hasOwnProperty('movies')) localStorage.setItem('movies', JSON.stringify( Dummy ));
// const Movies = JSON.parse( localStorage.getItem('movies') );


const App = () => (
	<div>
		<Header/>
		<div className="container">
			<Main movies={ Movies } />	
		</div>
	</div>
)
export default App;