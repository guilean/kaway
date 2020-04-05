import { boolean, text, withKnobs } from '@storybook/addon-knobs';

import React from 'react';
import { TextField } from '../src/lib/TextField';
import { withA11y } from '@storybook/addon-a11y';

export default {
	title: 'KawayTextField',
	component: TextField,
	decorators: [withA11y, withKnobs],
};

export const KawayTextField = () => (
	<TextField
		disabled={boolean('disabled', false)}
		autoFocus={boolean('autoFocus', false)}
		value={text('value', 'value')}
		defaultValue={text('defaultValue', 'defaultValue')}
		placeholder={text('placeholder', 'placeholder')}
		fullWidth={boolean('fullWidth', false)}
		required={boolean('required', false)}
		error={boolean('error', false)}
		label={text('label', 'label')}
		helperText={text('helperText', 'helperText')}
	/>
);

KawayTextField.story = {
	name: 'TextField',
};
