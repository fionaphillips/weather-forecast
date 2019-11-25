import React from 'react';
import StyledTile from './styled';

const Tile = () => {
  return (
    <StyledTile>
      <div className="day">Day</div>
      <div className="image">Image</div>
      <div className="max-min-temps">
        <div className="max">Max</div>
        <div className="min">Min</div>
      </div>
    </StyledTile>
  );
};

export default Tile;
