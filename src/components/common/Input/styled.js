import styled from 'styled-components';

const StyledInput = styled.div`
  height: 500px;
  background-color: #eee;
  padding: 20px;

  input {
    border-radius: 5px;
    font-size: 20px;
    height: 30px;
    width: 450px;
  }

  button {
    background-color: #24a0ed;
    border-radius: 5px;
    color: white;
    height: 30px;
    margin-left: 10px;
  }

  label {
    font-weight: bold;
    font-family: sans-serif;
  }
`;

export default StyledInput;
