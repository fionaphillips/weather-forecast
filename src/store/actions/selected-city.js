import * as actionTypes from './action-types';

const handleCity = city => {
  return {
    type: actionTypes.HANDLE_SELECTED_CITY,
    city,
  };
};

export default handleCity;
