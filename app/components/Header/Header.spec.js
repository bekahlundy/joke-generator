import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Header from './Header';

describe('<Header/>', function () {
  it('should render a div', function () {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('div')).to.have.length(1);
  });
  it('should display a single h1 tag', function () {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('h1')).to.have.length(1);
  });
  it('should render a settings button', () => {
  const wrapper = shallow(<Header />)
  const submitButton = wrapper.find('.settings-btn');
  expect(submitButton.props().text).to.equal('settings');
});
});
