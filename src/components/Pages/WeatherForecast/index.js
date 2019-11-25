import React from 'react';
import Tile from 'Common';

import StyledWeatherForecast from './styled';

const WeatherForecast = () => {
  return (
    <StyledWeatherForecast>
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </StyledWeatherForecast>
  );
};

export default WeatherForecast;
