import React from 'react';
import { CardContent, CardContentProps } from '@mui/material';

const CardContentAtom: React.FC<CardContentProps> = ({ ...props }) => {
  return <CardContent {...props} />;
};

export default CardContentAtom;
