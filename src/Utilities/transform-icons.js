import React from 'react';
import { FaBeer } from 'react-icons/fa';

const transformIcon = iconID => {
  let iconImage;

  if (iconID[0] === 801) {
    console.log('here');
    iconImage = <FaBeer />;
  }

  return iconImage;
};

export default transformIcon;
