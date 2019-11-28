import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';

import handleCity from 'Actions';

class InputForm extends React.Component {
  handleSubmit = values => {
    const { selectedCity } = this.props;
    selectedCity(values);
  };
  render() {
    return (
      <Formik
        initialValues={{ city: '' }}
        validate={values => {
          const errors = {};
          if (!values.city) {
            errors.city = 'Required';
          } else if (!/^[a-zA-Z]/i.test(values.city)) {
            errors.city = 'Invalid city name';
          }
          return errors;
        }}
        onSubmit={values => {
          this.handleSubmit(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form id="city-form">
            <Field type="text" name="city" title="Enter a city" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <ErrorMessage name="city" component="div" />
          </Form>
        )}
      </Formik>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  selectedCity: value => dispatch(handleCity(value)),
});

export default connect(null, mapDispatchToProps)(InputForm);
