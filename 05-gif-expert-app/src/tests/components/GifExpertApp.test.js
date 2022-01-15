import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../../GifExpertApp';

describe('test in GifExpertApp', () => {
    test('should match snapshot', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should show a category list', () => {
        const categories = ['hacker', 'death', 'small'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
})