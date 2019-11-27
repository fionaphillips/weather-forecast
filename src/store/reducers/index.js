import { combineReducers } from 'redux';
import selectedCityReducer from './selected-city';

const CITY = 'CITY';

const rootReducer = combineReducers({
  [CITY]: selectedCityReducer,
});
export default rootReducer;
