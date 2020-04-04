import './Button.scss';

import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';

const Button = ({
	children = null,
	disabled = false,
	startIcon = undefined,
	endIcon = undefined,
	fullWidth = false,
	size = 'medium',
	onClick = undefined,
}) => {
	return (
		<button
			className={clsx('btn', `btn--${size}`, {
				['btn--fullWidth']: fullWidth,
			})}
			onClick={onClick}
			disabled={disabled}
		>
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
	size: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
