import React from 'react';
import { Dialog, DialogContent, DialogProps, DialogTitle } from '@mui/material';

interface DialogAtomProps extends DialogProps {
  title: string;
}

const DialogAtom: React.FC<DialogAtomProps> = ({ title, children, ...props }) => {
  return (
    <Dialog {...props}  sx={{
      "& .MuiDialog-container": {
        "& .MuiPaper-root": {
          boxShadow: "none",
          maxWidth: "85%",
          maxHeight: "100%",
        },
      },
    }}>
      <DialogTitle sx={{ backgroundColor: 'info.main', color: 'secondary.main' }}>{title}</DialogTitle>
      <DialogContent sx={{ backgroundColor: 'info.main' }}>{children}</DialogContent>
    </Dialog>
  );
};

export default DialogAtom;
