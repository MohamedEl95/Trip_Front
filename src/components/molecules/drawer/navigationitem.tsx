import React from "react";
import { Link as RouterLink } from "react-router-dom";
import TypographyAtom from "../../atoms/typography";
import {
  ListItemAtom,
  ListItemButtonAtom,
  ListItemIconAtom,
} from "../../atoms/list";

interface NavigationItemProps {
  path: string;
  icon: React.ReactElement;
  text: string;
  isActive: boolean;
}

export const MyListItem: React.FC<NavigationItemProps> = ({
  path,
  icon,
  text,
  isActive,
}) => (
  <ListItemAtom disablePadding sx={{ display: "block",color:"info.300" }}>
    <RouterLink to={path} style={{ textDecoration: "none", color: "inherit" }}>
      <ListItemButtonAtom
        sx={{
          minHeight: 48,
          px: "32px",
          backgroundColor: isActive ? "primary.main" : "transparent",
          fontSize:"18px",
          fontWeight:"bold"
        }}
      >
        <ListItemIconAtom
          sx={{
            minWidth: 0,
            mr: "32px",
            justifyContent: "center",
          }}
        >
          {icon}
        </ListItemIconAtom>
        <TypographyAtom
          fontSize="16px"
          fontWeight="400"
          lineHeight="20px"
        />
        {text} <TypographyAtom />
      </ListItemButtonAtom>
    </RouterLink>
  </ListItemAtom>
);
