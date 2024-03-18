import { Outlet } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import DrawerAppbar from "../molecules/drawer";
import BoxAtom from "../atoms/box";
export const AgencyTemplate: React.FC = () => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
      <BoxAtom
        sx={{
          paddingLeft:  open ? "321px" : "84px",
          transition: "padding 0.3s ease-in-out",
        }}
      >
        <CssBaseline />
        <DrawerAppbar
          open={open}
          handleDrawerClose={handleDrawerClose}
          handleDrawerOpen={handleDrawerOpen}
        />
        <BoxAtom
          component="main"
          sx={{
            flexGrow: 1,
            paddingTop: "30px",
            height: "100vh",
            backgroundColor:"info.800",
            overflowY: "auto",
            
          }}
        >
          <Outlet />
        </BoxAtom>
      </BoxAtom>
  );
};