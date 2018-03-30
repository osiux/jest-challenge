import React from 'react';
import { shallow } from 'enzyme';

import Button from '../../src/js/components/Button';

describe('Button component', () => {
    it('matches snapshot', () => {
        const component = shallow(<Button />);

        expect(component).toMatchSnapshot();
    });

    it('renders context property', () => {
        const component = shallow(<Button context="danger" />);

        expect(component).toMatchSnapshot();

        expect(component.find('.btn-primary')).not.toHaveLength(1);
        expect(component.find('.btn-danger')).toHaveLength(1);
    });

    it('calls onClick function when clicked', () => {
        const mockFn = jest.fn();

        const component = shallow(<Button onClick={mockFn} />);

        expect(mockFn).not.toBeCalled();

        component.find('button').simulate('click');

        expect(mockFn).toBeCalled();
    });
});
