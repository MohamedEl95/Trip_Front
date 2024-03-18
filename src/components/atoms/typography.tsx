import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

const TypographyAtom: React.FC<TypographyProps> = ({ children, ...props }) => {
  return <Typography {...props}>{children}</Typography>;
};

export default TypographyAtom;
