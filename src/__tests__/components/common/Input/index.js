import React from 'react';
import { shallow } from 'enzyme';
import 'SetupTests';

import { Input } from 'Common';

describe('Input component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Input />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it('renders an h1', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.text()).toContain('Five Day Forecast');
  });

  it('renders a label component', () => {
    expect(wrapper.find('label')).toHaveLength(1);
    expect(wrapper.text()).toContain('Enter city name');
  });

  it('renders an InputForm component', () => {
    expect(wrapper.find('Connect(InputForm)')).toHaveLength(1);
  });
});
