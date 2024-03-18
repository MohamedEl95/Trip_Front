import React from 'react';
import { Switch as MuiSwitch, SwitchProps } from '@mui/material';

const SwitchAtom: React.FC<SwitchProps> = ({ ...props }) => {
  return <MuiSwitch {...props} />;
};

export default SwitchAtom;
