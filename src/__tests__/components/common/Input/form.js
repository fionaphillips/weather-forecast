import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import 'SetupTests';

import InputForm from 'Common/Input/form';

const mockStore = configureMockStore();
const store = mockStore({});

describe('InputForm component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <InputForm>
          <Formik />
        </InputForm>
      </Provider>,
    );
  });

  afterEach(() => {
    wrapper = null;
  });

  it('renders an Formik component', () => {
    console.log(wrapper.debug());
    expect(wrapper.find('Formik')).toHaveLength(1);
  });

  describe('form', () => {
    it('renders a text field', () => {
      expect(wrapper.find('Field')).toHaveLength(1);
    });

    it('renders a submit button', () => {
      expect(wrapper.find('button')).toHaveLength(1);
      expect(wrapper.text()).toContain('Submit');
    });
  });
});
