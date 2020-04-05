import './Label.scss';

import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';

const Label = ({ text, error }) => {
	return (
		<label
			data-testid="label"
			className={clsx('label', {
				['label--error']: error,
			})}
		>
			{text}
		</label>
	);
};

Label.propTypes = {
	text: PropTypes.string,
	error: PropTypes.bool,
};

export default Label;
