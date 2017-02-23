import React from 'react';
import Main from './main.js';
import Dummy from '../dummy_data.js';

if(!localStorage.hasOwnProperty('movies')) localStorage.setItem('movies', JSON.stringify( [] ));
const Movies = JSON.parse( localStorage.getItem('movies') );


// To pre populate movie list, swap out 
// <Main movies={ Movies }/> with 
// <Main movies={ Dummy }

const App = () => (
	<div>
		<div className="container">
			<Main movies={ Dummy } />	
		</div>
	</div>
)
export default App;