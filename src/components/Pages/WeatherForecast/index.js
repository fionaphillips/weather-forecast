import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { Tile, Input } from 'Common';
import transformWeatherData from 'Utilities/transform-weather-data';
import fetchWeather from 'Services';
import { getCity } from 'Reducers/selected-city';
import { connect } from 'react-redux';

import StyledWeatherForecast from './styled';

class WeatherForecast extends React.Component {
  static propTypes = {
    city: PT.shape({
      city: PT.string.isRequired,
    }),
  };

  state = { days: [], city: '' };

  componentDidUpdate(prevProps) {
    const { city } = this.props;

    if (prevProps.city !== city) {
      this.setState({ city });

      fetchWeather(city.city).then(x => this.setState({ days: transformWeatherData(x) }));
    }
  }

  render() {
    const { days, city } = this.state;
    const decoratedTile = days.map(x => (
      <Tile key={x.id} title={x.label} min={x.minTemp} max={x.maxTemp} icon={x.icon[0]} />
    ));

    return (
      <StyledWeatherForecast>
        {!city && <Input />}
        {city && <h1>Forecast for {city.city}</h1>}
        {city && decoratedTile}
      </StyledWeatherForecast>
    );
  }
}

const mapStateToProps = state => {
  return {
    city: getCity(state.CITY),
  };
};

export default connect(mapStateToProps)(WeatherForecast);
