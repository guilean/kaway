import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../lib/Button';

const App = () => (
	<div>
		<h1>Demo</h1>
		<h2>Button</h2>
		<Button text="Click me!" />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
