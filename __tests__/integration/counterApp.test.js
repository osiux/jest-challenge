import React from 'react';
import { mount } from 'enzyme';

import App from '../../src/js/components/App';


describe('Counter App', () => {
    it('matches snapshot', () => {
        const component = mount(<App />);

        expect(component).toMatchSnapshot();
    });

    it('has 0 as counter initial value', () => {
        const component = mount(<App />);

        expect(component.state('counter')).toBe(0);
        expect(component.find('p.counter').text()).toBe('0');
    });

    it('decrease button decreases the counter value', () => {
        const component = mount(<App />);

        expect(component.state('counter')).toBe(0);

        const decreaseButton = component.find('button').first();
        decreaseButton.simulate('click');

        expect(component.state('counter')).toBe(-1);
        expect(component.find('p.counter').text()).toBe('-1');
    });

    it('increase button increases the counter value', () => {
        const component = mount(<App />);

        expect(component.state('counter')).toBe(0);

        const increaseButton = component.find('button').last();
        increaseButton.simulate('click');

        expect(component.state('counter')).toBe(1);
        expect(component.find('p.counter').text()).toBe('1');
    });

    it('reset button resets the counter value to 0', () => {
        const component = mount(<App />);

        component.setState({ counter: 10 });

        expect(component.state('counter')).toBe(10);

        const resetButton = component.find('button').at(1);
        resetButton.simulate('click');

        expect(component.state('counter')).toBe(0);
        expect(component.find('p.counter').text()).toBe('0');
    });
});