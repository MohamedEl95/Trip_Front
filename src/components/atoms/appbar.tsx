import React from 'react';
import { AppBar as MuiAppBar, AppBarProps } from '@mui/material';

const AppBarAtom: React.FC<AppBarProps> = ({ ...props }) => {
  return <MuiAppBar {...props} />;
};

export default AppBarAtom;
