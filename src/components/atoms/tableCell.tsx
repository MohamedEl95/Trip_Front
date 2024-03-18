import React, { ReactNode } from 'react';
import { TableCell, TableCellProps } from '@mui/material';

interface TableCellAtomProps extends TableCellProps {
  children: ReactNode;
}

const TableCellAtom: React.FC<TableCellAtomProps> = ({ children, ...props }) => {
  return <TableCell {...props}>{children}</TableCell>;
};

export default TableCellAtom;
