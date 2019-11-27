import React from 'react';
import Tile from 'Common';
import transformWeatherData from 'Utilities/transform-weather-data';
import fetchWeather from 'Services';

import StyledWeatherForecast from './styled';

class WeatherForecast extends React.Component {
  state = { days: [] };

  componentDidMount() {
    fetchWeather().then(x => this.setState({ days: transformWeatherData(x) }));
  }

  render() {
    const { days } = this.state;
    const decoratedTile = days.map(x => (
      <Tile key={x.id} title={x.label} min={x.minTemp} max={x.maxTemp} icon={x.icon[0]} />
    ));
    return (
      <StyledWeatherForecast>
        <h1>Forecast for London</h1>
        {decoratedTile}
      </StyledWeatherForecast>
    );
  }
}

export default WeatherForecast;
