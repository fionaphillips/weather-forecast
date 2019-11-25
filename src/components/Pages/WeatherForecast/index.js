import React from 'react';
import Tile from 'Common';
import getNextFiveDays from 'Utilities/next-five-days';

import StyledWeatherForecast from './styled';

const WeatherForecast = () => {
  const decoratedTile = getNextFiveDays().map(x => <Tile key={x.id} title={x.label} />);
  return <StyledWeatherForecast>{decoratedTile}</StyledWeatherForecast>;
};

export default WeatherForecast;
