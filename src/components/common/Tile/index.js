import React from 'react';
import { PropTypes as PT } from 'prop-types';
import transformIcons from 'Utilities/transform-icons';

import StyledTile from './styled';

const Tile = ({ title, min, max, icon }) => {
  return (
    <StyledTile>
      <div className="day">{title}</div>
      {transformIcons(icon)}
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
  icon: PT.arrayOf.isRequired,
};

export default Tile;
