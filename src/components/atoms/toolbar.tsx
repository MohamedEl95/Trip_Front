import React from 'react';
import { Toolbar as MuiToolbar, ToolbarProps } from '@mui/material';

const ToolbarAtom: React.FC<ToolbarProps> = ({ ...props }) => {
  return <MuiToolbar {...props} />;
};

export default ToolbarAtom;
