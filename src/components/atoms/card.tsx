import React from 'react';
import { Card, CardProps } from '@mui/material';

const CardAtom: React.FC<CardProps> = ({ ...props }) => {
  return <Card {...props} />;
};

export default CardAtom;
