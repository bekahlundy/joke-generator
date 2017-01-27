import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import App from './App';

describe('<App/>', function () {
  it.skip('should render a div', function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
