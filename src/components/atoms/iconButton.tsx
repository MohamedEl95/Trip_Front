import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import React from "react";

interface IconButtonAtomProps extends IconButtonProps {
  disableRipple?: boolean;
}

const IconButtonAtom: React.FC<IconButtonAtomProps> = ({
  disableRipple = false,
  ...props
}) => {
  return <IconButton {...props} disableRipple={disableRipple} />;
};

export default IconButtonAtom;
