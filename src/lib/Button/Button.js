import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
	children,
	disabled,
	startIcon,
	endIcon,
	fullWidth,
	href,
	size,
}) => {
	return (
		<button className="button" disabled={disabled}>
			{startIcon && startIcon}
			{children}
			{endIcon && endIcon}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	disabled: PropTypes.bool,
	startIcon: PropTypes.node,
	endIcon: PropTypes.node,
	fullWidth: PropTypes.bool,
	href: PropTypes.string,
	size: PropTypes.string,
};

Button.defaultProps = {
	children: null,
	disabled: true,
	startIcon: undefined,
	endIcon: undefined,
	fullWidth: false,
	href: undefined,
	size: 'medium',
};

export default Button;
