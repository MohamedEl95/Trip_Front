import React, { ReactNode } from 'react';
import { TableRow, TableRowProps } from '@mui/material';

interface TableRowAtomProps extends TableRowProps {
  children: ReactNode;
}

const TableRowAtom: React.FC<TableRowAtomProps> = ({ children, ...props }) => {
  return <TableRow {...props}>{children}</TableRow>;
};

export default TableRowAtom;
