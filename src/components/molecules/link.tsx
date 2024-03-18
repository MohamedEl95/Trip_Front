import { Box,  } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import TypographyAtom from "../atoms/typography";

interface LinkProps {
  to: string;
  style?: React.CSSProperties;
  text: string; 
  onClick?: () => void;
}

const MyLink: React.FC<LinkProps> = ({ to, style, text,onClick }) => {
  return (
    <Box
      onClick={onClick}
      component={RouterLink}
      to={to}
      sx={{
        textDecoration: "none",
        ...style,
      }}
    >
      <TypographyAtom
        sx={{
          fontFamily: "Montserrat",
          ...style,
        }}
      >
        {text}
      </TypographyAtom>
    </Box>
  );
};

export default MyLink;