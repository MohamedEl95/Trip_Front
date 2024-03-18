import React from "react";
import { Collapse as MuiCollapse, CollapseProps } from "@mui/material";


const CollapseAtom: React.FC<CollapseProps> = (props) => {
  return <MuiCollapse {...props} />;
};

export default CollapseAtom;
