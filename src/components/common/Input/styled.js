import styled from 'styled-components';
import { device } from 'Themes';

const StyledInput = styled.div`
  height: 500px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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

  @media ${device.tabletS} {
    min-width: 360px;
  }
`;

export default StyledInput;
