import './TextField.scss';

import React, { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';
import clsx from 'clsx';

const TextField = ({
	onFocus,
	autoFocus,
	onChange,
	disabled = false,
	fullWidth = false,
	required = false,
	defaultValue,
	value,
	placeholder,
	readOnly,
	label,
	error,
	helperText,
}) => {
	const inputRef = useRef(null);

	useEffect(() => {
		autoFocus && inputRef.current.focus();
	}, []);

	return (
		<div className="textfield">
			{label && (
				<label
					className={clsx('label', {
						['label--error']: error,
					})}
					data-testid="label"
				>
					{label}
				</label>
			)}
			<input
				aria-label={helperText}
				className={clsx('input', {
					['input--fullWidth']: fullWidth,
				})}
				ref={inputRef}
				onFocus={onFocus}
				onChange={onChange}
				disabled={disabled}
				readOnly={readOnly}
				autoFocus={autoFocus}
				required={required}
				defaultValue={defaultValue}
				value={value}
				placeholder={placeholder}
				data-testid="textfield"
			/>
			{helperText && <label data-testid="label-helperText">{helperText}</label>}
		</div>
	);
};

TextField.propTypes = {
	onFocus: PropTypes.func,
	onChange: PropTypes.func,
	autoFocus: PropTypes.bool,
	disabled: PropTypes.bool,
	defaultValue: PropTypes.string,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	fullWidth: PropTypes.bool,
	readOnly: PropTypes.bool,
	required: PropTypes.bool,
	label: PropTypes.string,
	helperText: PropTypes.string,
	error: PropTypes.bool,
};

export default TextField;
