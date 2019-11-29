import React from 'react';
import InputForm from './form';
import StyledInput from './styled';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Input = () => {
  return (
    <StyledInput>
      <h1>Five Day Forecast</h1>
      <label htmlFor="input-form">Enter city name</label>
      <InputForm id="input-form" />
    </StyledInput>
  );
};

export default Input;
/* eslint-enable jsx-a11y/label-has-associated-control */
