import React from 'react';
import { shallow } from 'enzyme';

import Controls from '../../src/js/components/Controls';

describe('Controls component', () => {
    it('matches snapshot', () => {
        const mockFn = jest.fn();

        const component = shallow(
            <Controls
                onDecrease={mockFn}
                onReset={mockFn}
                onIncrease={mockFn}
            />
        );

        expect(component).toMatchSnapshot();
    });

    it('renders control Buttons', () => {
        const mockFn = jest.fn();

        const component = shallow(
            <Controls
                onDecrease={mockFn}
                onReset={mockFn}
                onIncrease={mockFn}
            />
        );

        const buttons = component.find('Button');

        expect(buttons).toHaveLength(3);
        expect(buttons.filter('[context="primary"]')).toHaveLength(2);
        expect(buttons.filter('[context="danger"]')).toHaveLength(1);
    });
});
