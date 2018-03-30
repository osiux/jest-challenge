import React from 'react';
import { shallow } from 'enzyme';

import Counter from '../../src/js/components/Counter';

describe('Counter component', () => {
    it('should match snapshot', () => {
        const component = shallow(<Counter counter={0} />);

        expect(component).toMatchSnapshot();
    });

    it('should render counter from property', () => {
        const component = shallow(<Counter counter={10} />);

        expect(component.find('p.counter').text()).toBe('10');
    });
});
