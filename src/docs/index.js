import { Button } from '../lib/Button';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
	<main>
		<div align="center">
			<img
				width="200"
				src="https://images.vexels.com/media/users/3/154568/isolated/preview/9a39776ad90adf8a623a9dab8047fc39-emoticon-feliz-kawaii-by-vexels.png"
				alt="Kawaui logo"
			/>
		</div>
		<h1 style={{ fontFamily: 'Roboto' }} align="center">
			Kaway Components
		</h1>
		<Button children="ADD NEW COMPONENT" />
	</main>
);

ReactDOM.render(<App />, document.getElementById('root'));
