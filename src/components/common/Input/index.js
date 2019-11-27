import React from 'react';
import InputForm from './form';
// import container from './container';
import StyledInput from './styled';

const Input = () => {
  console.log('foo');
  return (
    <StyledInput>
      <label htmlFor="input-form">Enter city name</label>
      <InputForm id="input-form" />
    </StyledInput>
  );
};

export default Input;
