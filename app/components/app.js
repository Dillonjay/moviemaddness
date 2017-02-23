import React from 'react';
import Main from './main.js';

if(!localStorage.hasOwnProperty('movies')) localStorage.setItem('movies', JSON.stringify( [] ));
const movies = JSON.parse( localStorage.getItem('movies') );

const App = () => (
	<div>
		<div className="container">
			<Main movies={movies} />	
		</div>
	</div>
)
export default App;