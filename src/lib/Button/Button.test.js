import { cleanup, fireEvent, render } from '@testing-library/react';

import Button from './Button';
import React from 'react';

describe('<Button/>', () => {
	afterEach(() => {
		cleanup();
	});

	it('snapshot', () => {
		const { getByRole } = render(<Button children={'Dummy'} />);
		const component = getByRole('button');
		expect(component).toMatchSnapshot();
	});

	it('should render a button node element', () => {
		const { getByRole } = render(<Button children={'Dummy'} />);
		const component = getByRole('button');
		expect(component.nodeName).toBe('BUTTON');
	});

	it('should have default class when render', () => {
		const { getByRole } = render(<Button children={'Dummy'} />);
		const component = getByRole('button');
		expect(component).toHaveClass('btn');
	});

	it('should have modifier class when size prop', () => {
		const { getByRole } = render(<Button children={'Dummy'} size="large" />);
		const component = getByRole('button');
		expect(component).toHaveClass('btn--large');
	});

	it('should have modifier class when fullWidth prop', () => {
		const { getByRole } = render(<Button children={'Dummy'} fullWidth />);
		const component = getByRole('button');
		expect(component).toHaveClass('btn--fullWidth');
	});

	it('should have disabled attribute when disabled prop', () => {
		const { getByRole } = render(<Button children={'Dummy'} disabled />);
		const component = getByRole('button');
		expect(component.hasAttribute('disabled')).toBeTruthy();
	});

	it('should render startIcon when startIcon prop', () => {
		const { getByRole } = render(
			<Button children={'Dummy'} startIcon={<i>startIcon</i>} />
		);
		const component = getByRole('button');
		expect(component.firstChild.nodeName).toBe('I');
	});

	it('should render endIcon when endIcon prop', () => {
		const { getByRole } = render(
			<Button children={'Dummy'} endIcon={<i>endIcon</i>} />
		);
		const component = getByRole('button');
		expect(component.lastChild.nodeName).toBe('I');
	});

	it('should render startIcon and endIcon when startIcon and endIcon prop', () => {
		const { getByRole } = render(
			<Button
				children={'Dummy'}
				startIcon={<i>startIcon</i>}
				endIcon={<i>endIcon</i>}
			/>
		);
		const component = getByRole('button');
		expect(component.firstChild.nodeName).toBe('I');
		expect(component.lastChild.nodeName).toBe('I');
	});

	it('should not render startIcon when startIcon prop is null', () => {
		const { getByRole } = render(
			<Button children={'Dummy'} startIcon={null} />
		);
		const component = getByRole('button');
		expect(component.firstChild.nodeName).not.toBe('I');
		expect(component.nodeName).toBe('BUTTON');
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
