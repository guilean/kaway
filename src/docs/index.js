import { Button } from '../lib/Button';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
	<div>
		<h1>Demo</h1>
		<h2>Button</h2>
		<Button children="ADD NEW COMPONENT" />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
