import React from 'react';
import { shallow } from 'enzyme';

import App from '../../src/js/components/App';

it('matches snapshot', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
});