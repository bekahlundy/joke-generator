import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import SingleJoke from './SingleJoke';

describe('<SingleJoke/>', function () {
  it('should render a div', function () {
    const wrapper = shallow(<SingleJoke/>);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
