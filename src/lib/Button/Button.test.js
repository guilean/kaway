import { cleanup, fireEvent, render } from '@testing-library/react';

import Button from './Button';
import React from 'react';

describe('<Button/>', () => {
	afterEach(() => {
		cleanup();
	});

	it('snnapshot', () => {
		const { getByRole } = render(<Button children={'Dummy'} />);
		const component = getByRole('button');
		expect(component).toMatchSnapshot();
	});

	it('should render a button node element', () => {
		const { getByRole } = render(<Button children={'Dummy'} />);
		const component = getByRole('button');
		expect(component.nodeName).toBe('BUTTON');
	});

	it('should have default btn class when rendered', () => {
		const { getByRole } = render(<Button children={'Dummy'} />);
		const component = getByRole('button');
		expect(component).toHaveClass('btn');
	});

	it('should change class with size prop', () => {
		const { getByRole } = render(<Button children={'Dummy'} size="large" />);
		const component = getByRole('button');
		expect(component).toHaveClass('btn--large');
	});

	it('should have disabled attribute', () => {
		const { getByRole } = render(<Button children={'Dummy'} disabled />);
		const component = getByRole('button');
		expect(component.hasAttribute('disabled')).toBeTruthy();
	});

	it('should call onClick when button is clicked', () => {
		const mockFn = jest.fn();
		const { getByRole } = render(
			<Button onClick={mockFn} children={'Dummy'} />
		);
		const component = getByRole('button');
		fireEvent.click(component);
		expect(mockFn).toHaveBeenCalledTimes(1);
	});
});
