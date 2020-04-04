import { boolean, text, withKnobs } from '@storybook/addon-knobs';

import { Button } from '../src/lib/Button';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

export default {
	title: 'KawayButton',
	component: Button,
	decorators: [withA11y, withKnobs],
};

export const KawayButton = () => (
	<Button
		disabled={boolean('disabled', true)}
		children={text('children', 'Kaway')}
		startIcon={text('startIcon', 's')}
		endIcon={text('endIcon', 'e')}
		fullWidth={boolean('fullWidth', false)}
		size={text('size', 'medium')}
		onClick={action('clicked')}
	/>
);

KawayButton.story = {
	name: 'Button',
};
