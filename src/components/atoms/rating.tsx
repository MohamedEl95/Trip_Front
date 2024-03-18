import React from 'react';
import { Rating as MuiRating, RatingProps } from '@mui/material';

const RatingAtom: React.FC<RatingProps> = (props) => {
  return <MuiRating {...props} />;
};

export default RatingAtom;
