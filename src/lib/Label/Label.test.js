import { cleanup, render } from '@testing-library/react';

import Label from './Label';
import React from 'react';

describe('<Label/>', () => {
	afterEach(() => {
		cleanup();
	});

	it('snapshot', () => {
		const { getByTestId } = render(<Label />);
		const component = getByTestId('label');
		expect(component).toMatchSnapshot();
	});

	it('should render an input node element', () => {
		const { getByTestId } = render(<Label />);
		const component = getByTestId('label');
		expect(component.nodeName).toBe('LABEL');
	});

	it('should render content when text prop', () => {
		const { getByTestId } = render(<Label text="Dummy" />);
		const component = getByTestId('label');
		expect(component.textContent).toBe('Dummy');
	});
});
