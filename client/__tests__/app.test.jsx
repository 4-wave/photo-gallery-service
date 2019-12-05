import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../Component/app.jsx';
import Gallery from '../Component/gallery.jsx';
import { fetchData } from '../Component/app.jsx';
import mockAxios from 'axios';

describe('Client App Component', () => {
  it ('it renders one <Gallery /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Gallery).length).toBe(1);
  });

  it('calls the axios request', () => {
    let x = mockAxios.get();
  });

  // dont need to test component did mount because that is guranteed to run by React
});
