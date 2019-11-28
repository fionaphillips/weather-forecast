import initialState from './initialState';

const selectedCityReducer = (state = initialState.selectedCity, action) => {
  switch (action.type) {
    case 'HANDLE_SELECTED_CITY':
      return { ...state, selectedCity: action.city };
    default:
      return state;
  }
};

export const getCity = store => store.selectedCity;
export default selectedCityReducer;
