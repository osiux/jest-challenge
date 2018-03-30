import React from 'react';
import { shallow } from 'enzyme';

import App from '../../src/js/components/App';

describe('App component', () => {
    it('matches snapshot', () => {
        const component = shallow(<App />);

        expect(component).toMatchSnapshot();
    });

    it('renders Counter and Controls components', () => {
        const component = shallow(<App />);

        expect(component.find('Counter').exists()).toBe(true);
        expect(component.find('Controls').exists()).toBe(true);
    });
});
