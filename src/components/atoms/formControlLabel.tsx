import React from 'react';
import { FormControlLabel as MuiFormControlLabel, FormControlLabelProps } from '@mui/material';

const FormControlLabelAtom: React.FC<FormControlLabelProps> = ({ ...props }) => {
  return <MuiFormControlLabel {...props} />;
};

export default FormControlLabelAtom;
