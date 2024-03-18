import { SxProps } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import React from "react";
import ListItemIcon, { ListItemIconProps } from "@mui/material/ListItemIcon";

interface ListAtomProps extends React.HTMLAttributes<HTMLUListElement> {
  sx?: SxProps;
}

export const ListAtom: React.FC<ListAtomProps> = ({ children, sx, ...rest }) => {
  return <List sx={sx} {...rest}>{children}</List>;
};

interface ListItemAtomProps extends React.HTMLAttributes<HTMLLIElement> {
  disablePadding?: boolean;
  sx?: SxProps;
}

export const ListItemAtom: React.FC<ListItemAtomProps> = ({
  children,
  disablePadding = false,
  sx,
  ...rest
}) => {
  return (
    <ListItem disablePadding={disablePadding} sx={sx} {...rest}>
      {children}
    </ListItem>
  );
};

interface ListItemButtonAtomProps extends React.HTMLAttributes<HTMLLIElement> {
  sx?: SxProps;
}

export const ListItemButtonAtom: React.FC<ListItemButtonAtomProps> = ({
  children,
  sx,
}) => {
  return <ListItemButton sx={sx} >{children}</ListItemButton>;
};

interface ListItemIconAtomProps extends ListItemIconProps {
  children?: React.ReactNode;
  sx?: SxProps;
}
export const ListItemIconAtom: React.FC<ListItemIconAtomProps> = ({
  children,
  sx,
  ...rest
}) => {
  return <ListItemIcon sx={sx} {...rest}>{children}</ListItemIcon>;
};