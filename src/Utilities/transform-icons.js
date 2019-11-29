import React from 'react';
import { WeatherCloudy, WeatherShower, WeatherSnow } from 'styled-icons/typicons';
import { CloudOff } from 'styled-icons/material';

const transformIcons = icon => {
  // light rain
  if (icon[0] >= 500 && icon[0] <= 501) {
    return <WeatherShower />;
    // snow
  } else if (icon[0] >= 600 && icon[0] <= 601) {
    return <WeatherSnow />;
    // clear sky
  } else if (icon[0] === 800) {
    return <CloudOff />;
    // cloudy
  } else if (icon[0] >= 801 && icon[0] <= 804) {
    return <WeatherCloudy />;
  }

  return null;
};

export default transformIcons;
