import dayjs from 'dayjs';
import _ from 'lodash';
import getNextFiveDays from './next-five-days';

const convertKelvinToCelsius = x => {
  return Math.round(x - 273.15);
};

const getAverageTemps = x => {
  const transformedFiveDays = [];
  getNextFiveDays().map(day => {
    const splitData = _.filter(x, ['day', day.label]);
    return transformedFiveDays.push(
      Object.assign(
        day,
        {
          minTemp: Math.min.apply(
            Math,
            splitData.map(i => i.minTemp),
          ),
        },
        day,
        {
          maxTemp: Math.max.apply(
            Math,
            splitData.map(i => i.maxTemp),
          ),
        },
        day,
        { icon: splitData.map(i => i.icon) },
      ),
    );
  });
  return transformedFiveDays;
};

const transformWeatherData = fiveDays => {
  const weatherData = [];
  fiveDays.list.map(day => {
    console.log('day: ', day);
    return weatherData.push({
      id: day.dt,
      day: dayjs(day.dt_txt).format('dddd'),
      minTemp: convertKelvinToCelsius(day.main.temp_min),
      maxTemp: convertKelvinToCelsius(day.main.temp_max),
      icon: day.weather.map(x => x.id),
    });
  });

  return getAverageTemps(weatherData);
};

export default transformWeatherData;
