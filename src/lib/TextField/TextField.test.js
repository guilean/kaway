import { cleanup, fireEvent, render } from '@testing-library/react';

import React from 'react';
import TextField from './TextField';

describe('<TextField/>', () => {
	afterEach(() => {
		cleanup();
	});

	it('snapshot', () => {
		const { getByTestId } = render(<TextField />);
		const component = getByTestId('textfield');
		expect(component).toMatchSnapshot();
	});

	it('should render an input node element', () => {
		const { getByTestId } = render(<TextField />);
		const component = getByTestId('textfield');
		expect(component.nodeName).toBe('INPUT');
	});

	it('should autofocus input when autoFocus prop', () => {
		const { getByTestId } = render(<TextField autoFocus />);
		const component = getByTestId('textfield');
		component.focus();
		expect(document.activeElement).toEqual(component);
	});

	it('should trigger onFocus prop when input focus', () => {
		const spyFocus = jest.fn();
		const { getByTestId } = render(<TextField onFocus={spyFocus} />);
		const component = getByTestId('textfield');
		fireEvent.focus(component);
		expect(spyFocus).toHaveBeenCalledTimes(1);
	});

	it('should trigger onChange prop when input change', () => {
		const spyChange = jest.fn();
		const { getByTestId } = render(<TextField onChange={spyChange} />);
		const component = getByTestId('textfield');
		fireEvent.change(component, { target: { value: 'Dummy' } });
		expect(spyChange).toHaveBeenCalledTimes(1);
	});

	it('should update input value when change event', () => {
		const { getByTestId } = render(<TextField />);
		const component = getByTestId('textfield');
		fireEvent.change(component, { target: { value: 'Dummy' } });
		expect(component.value).toBe('Dummy');
	});

	it('should have default value when defaultValue prop', () => {
		const { getByTestId } = render(<TextField defaultValue="Dummy" />);
		const component = getByTestId('textfield');
		expect(component.value).toBe('Dummy');
	});

	it('should have modifier class when fullWidth prop', () => {
		const { getByTestId } = render(<TextField fullWidth />);
		const component = getByTestId('textfield');
		expect(component).toHaveClass('input--fullWidth');
	});

	it('should have value when value prop', () => {
		const { getByTestId } = render(<TextField value="Dummy" readOnly />);
		const component = getByTestId('textfield');
		expect(component.value).toBe('Dummy');
	});

	it('should have placeholder when placeholder prop', () => {
		const { getByTestId } = render(<TextField placeholder="Dummy" />);
		const component = getByTestId('textfield');
		expect(component.placeholder).toBe('Dummy');
	});

	it('should have required attribute when required prop', () => {
		const { getByTestId } = render(<TextField required />);
		const component = getByTestId('textfield');
		expect(component.hasAttribute('required')).toBeTruthy();
	});

	it('should render label when label prop', () => {
		const { getByTestId } = render(<TextField label="Dummy" />);
		const component = getByTestId('label');
		expect(component.nodeName).toBe('LABEL');
		expect(component.textContent).toBe('Dummy');
	});

	it('should have label with error class when error prop', () => {
		const { getByTestId } = render(<TextField error label="Dummy" />);
		const component = getByTestId('label');
		expect(component).toHaveClass('label--error');
	});

	it('should render helperText label when helperText prop', () => {
		const { getByTestId } = render(<TextField helperText="Dummy" />);
		const component = getByTestId('label-helperText');
		expect(component.nodeName).toBe('LABEL');
		expect(component.textContent).toBe('Dummy');
	});
});
