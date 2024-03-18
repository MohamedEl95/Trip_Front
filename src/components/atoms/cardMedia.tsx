import React from 'react';
import { CardMedia, CardMediaProps } from '@mui/material';

const CardMediaAtom: React.FC<CardMediaProps> = ({ ...props }) => {
  return <CardMedia {...props} />;
};

export default CardMediaAtom;
