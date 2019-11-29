import React from 'react';
import { compose } from 'redux';
import { PropTypes as PT } from 'prop-types';
import transformWeatherData from 'Utilities/transform-weather-data';
import fetchWeather from 'Services';
import { getCity } from 'Reducers/selected-city';
import { connect } from 'react-redux';

const WeatherForecastContainer = Wrapped =>
  class extends React.Component {
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
      return <Wrapped city={city} days={days} />;
    }
  };

const mapStateToProps = state => {
  return {
    city: getCity(state.CITY),
  };
};

export default compose(connect(mapStateToProps), WeatherForecastContainer);
