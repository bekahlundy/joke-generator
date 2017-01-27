import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Input from './Input';

describe('<Input/>', function () {
  it('should render a input', function () {
    const wrapper = shallow(<Input/>);
    expect(wrapper.find('input')).to.have.length(1);
  });
  it('has className and onChange properties', () => {
  const fakeName = 'fakeName'
  const fakeChange = 'fakeChange'
  const wrapper = shallow(<Input className={fakeName} onChange={fakeChange}/>)
  const inputWrapper = wrapper.find('input')
  expect(inputWrapper.props().className).to.equal('fakeName')
  expect(inputWrapper.props().onChange).to.equal('fakeChange')
})

it('renders placeholder correctly', () => {
  const fakePlaceholder = 'Set'
  const wrapper = shallow(<Input placeholder={fakePlaceholder}/>)
  const inputText = wrapper.find('input').text()
  expect(inputText).to.equal('')
});
});
