// api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=f7db666362c4a71532a9e4200e289365
import { WEATHER_CALL, FIVE_DAY_FORECAST, API_KEY } from './config';

const fetchWeather = () =>
  fetch(`http://${WEATHER_CALL}${FIVE_DAY_FORECAST}?q=London,uk&APPID=${API_KEY}`).then(resp =>
    resp.json(),
  );

export default fetchWeather;
