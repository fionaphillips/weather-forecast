import React from 'react';
import { WeatherCloudy, WeatherShower, WeatherSnow } from 'styled-icons/typicons';
import { CloudOff } from 'styled-icons/material';
import { RAIN, SNOW, CLEAR_DAY, CLOUDY } from './constants';

const transformIcons = icon => {
  if (RAIN(icon[0])) {
    return <WeatherShower />;
  } else if (SNOW(icon[0])) {
    return <WeatherSnow />;
  } else if (CLEAR_DAY(icon[0])) {
    return <CloudOff />;
  } else if (CLOUDY(icon[0])) {
    return <WeatherCloudy />;
  }

  return null;
};

export default transformIcons;
