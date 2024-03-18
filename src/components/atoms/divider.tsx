import React from 'react';
import { Divider, DividerProps } from '@mui/material';

const DividerAtom: React.FC<DividerProps> = ({ ...props }) => {
  return <Divider {...props} />;
};

export default DividerAtom;
