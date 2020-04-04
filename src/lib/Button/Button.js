import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ text, disabled }) => (
	<button className="button" disabled={disabled}>
		{text}
	</button>
);

Button.propTypes = {
	text: PropTypes.string,
	disabled: PropTypes.bool,
};

export default Button;
