export const RAIN = value => {
  return value >= 500 && value <= 501;
};

export const SNOW = value => {
  return value >= 600 && value <= 601;
};

export const CLEAR_DAY = value => {
  return value === 800;
};

export const CLOUDY = value => {
  return value >= 801 && value <= 804;
};
