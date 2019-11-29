import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { Input, Tile } from 'Common';
import container from './container';

import StyledWeatherForecast from './styled';

const WeatherForecast = ({ city, days }) => {
  const decoratedTile = days.map(x => {
    return <Tile key={x.id} title={x.label} min={x.minTemp} max={x.maxTemp} icon={x.icon[0]} />;
  });

  return (
    <StyledWeatherForecast>
      {!city && <Input />}
      {city && <h1>Forecast for {city.city}</h1>}
      {city && decoratedTile}
    </StyledWeatherForecast>
  );
};

export default container(WeatherForecast);

WeatherForecast.propTypes = {
  city: PT.shape({
    city: PT.string.isRequired,
  }),
  days: PT.shape({
    id: PT.number.isRequired,
    label: PT.string.isRequired,
    minTemp: PT.number.isRequired,
    maxTemp: PT.number.isRequired,
    icon: PT.arrayOf(PT.numbers).isRequired,
  }),
};
