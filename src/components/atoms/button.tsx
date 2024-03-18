import React from 'react';
import { Button, ButtonProps } from '@mui/material';

const ButtonAtom: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default ButtonAtom;
