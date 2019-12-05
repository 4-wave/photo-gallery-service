import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../Component/sample';

describe('Counter Component', () => {
  it ('starts with a count of 0', () => {
    const wrapper = shallow(<Counter />);
    const countState = wrapper.state().count;
    expect(countState).toEqual(0);
  });
});
