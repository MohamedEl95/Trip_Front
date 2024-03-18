import React, { ReactNode } from 'react';
import { Table as MuiTable, TableProps, TableHead,  TableBody } from '@mui/material';
import TypographyAtom from '../atoms/typography';
import TableRowAtom from '../atoms/tableRow';
import TableCellAtom from '../atoms/tableCell';

interface TableMoleculeProps extends TableProps {
  headers: string[];
  children: ReactNode;
}

const Table: React.FC<TableMoleculeProps> = ({ headers, children, ...props }) => {
  return (
    <MuiTable {...props}>
      <TableHead>
        <TableRowAtom>
          {headers.map((header) => (
            <TableCellAtom key={header}>
              <TypographyAtom color="primary.main" fontWeight={"bold"} fontSize={"18ox"}>{header}</TypographyAtom>
            </TableCellAtom>
          ))}
        </TableRowAtom>
      </TableHead>
      <TableBody>{children}</TableBody>
    </MuiTable>
  );
};

export default Table;
