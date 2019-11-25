import React from 'react';
import { PropTypes as PT } from 'prop-types';

import StyledTile from './styled';

const Tile = ({ title }) => {
  return (
    <StyledTile>
      <div className="day">{title}</div>
      <div className="image">Image</div>
      <div className="max-min-temps">
        <div className="max">Max</div>
        <div className="min">Min</div>
      </div>
    </StyledTile>
  );
};

Tile.propTypes = {
  title: PT.string.isRequired,
};

export default Tile;
