import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import JokeCard from './JokeCard';

describe('<JokeCard/>', function () {
  it('should render a section', function () {
    const wrapper = shallow(<JokeCard/>);
    expect(wrapper.find('section')).to.have.length(1);
  });
});
