import React from 'react';
import { shallow } from 'enzyme';
import 'SetupTests';

import { Tile } from 'Common';

describe('Tile component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Tile title="tile title" max={10} min={5} icon={[500]} />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it('renders a title from props', () => {
    expect(wrapper.text()).toContain('tile title');
  });

  it('renders a max temperature from props', () => {
    expect(wrapper.text()).toContain('Max: 10');
  });

  it('renders a min temperature from props', () => {
    expect(wrapper.text()).toContain('Min: 5');
  });
});
