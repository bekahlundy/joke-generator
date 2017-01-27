import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Settings from './Settings';

describe('<Settings/>', function () {
  it.skip('should render a div', function () {
    const wrapper = shallow(<Settings/>);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
