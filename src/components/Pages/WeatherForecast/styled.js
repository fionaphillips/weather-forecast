import styled from 'styled-components';

const StyledWeatherForecast = styled.div`
  h1 {
    font-family: sans-serif;
    text-align: center;
  }

  .tiles {
    opacity: 0.5;
  }

  svg {
    width: 70%;
    path {
      max-width: 145px;
    }
  }
`;

export default StyledWeatherForecast;
