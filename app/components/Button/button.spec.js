import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Button from './Button';

describe('<Button/>', function () {
  it('should render a button', function () {
    const wrapper = shallow(<Button/>);
    expect(wrapper.find('button')).to.have.length(1);
  });
  it('has className and onClick properties', () => {
  const fakeName = 'fakeName'
  const fakeClick = 'fakeClick'
  const wrapper = shallow(<Button className={fakeName} onClick={fakeClick}/>)
  const buttonWrapper = wrapper.find('button')
  expect(buttonWrapper.props().className).to.equal('fakeName')
  expect(buttonWrapper.props().onClick).to.equal('fakeClick')
})

it('renders text correctly', () => {
  const fakeText = 'Submit'
  const wrapper = shallow(<Button text={fakeText}/>)
  const buttonText = wrapper.find('button').text()
  expect(buttonText).to.equal('Submit')
});
});
