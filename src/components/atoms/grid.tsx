import React from 'react';
import { Grid, GridProps } from '@mui/material';

const GridAtom: React.FC<GridProps> = ({ ...props }) => {
  return <Grid {...props} />;
};

export default GridAtom;
