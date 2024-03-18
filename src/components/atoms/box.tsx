import React from 'react';
import { Box, BoxProps } from '@mui/material';

const BoxAtom: React.FC<BoxProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};

export default BoxAtom;
