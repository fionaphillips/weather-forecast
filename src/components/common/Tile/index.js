import React from 'react';
import { PropTypes as PT } from 'prop-types';

import StyledTile from './styled';

const Tile = ({ title, min, max, icon }) => {
  const iconUrl = iconCode => `http://openweathermap.org/img/w/${iconCode}.png`;
  return (
    <StyledTile>
      <div className="day">{title}</div>
      <img src={iconUrl(icon)} alt="Weather Icon" />
      <div className="max-min-temps">
        <div className="max">Max: {max} </div>
        <div className="min">Min: {min}</div>
      </div>
    </StyledTile>
  );
};

Tile.propTypes = {
  title: PT.string.isRequired,
  min: PT.number.isRequired,
  max: PT.number.isRequired,
  icon: PT.array.isRequired,
};

export default Tile;
