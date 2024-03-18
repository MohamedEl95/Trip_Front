import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Box, Menu } from "@mui/material";
import LanguagesList from "./LanguagesList";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import TypographyAtom from "../../atoms/typography";
import { UpIcon } from "../../atoms/icons/upIcon";
import { DownIcon } from "../../atoms/icons/downIcon";
import { LanguageIcon } from "../../atoms/icons/languageIcon";
function LanguagesMenuHolder(props: {
  readonly languages: {
    key: string;
    value: string;
  }[];
}) {
  const { languages } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const currentLang = useSelector((state: RootState) => state.i18n.lang);

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  return (
    <>
      <IconButton onClick={handleClose} sx={{ borderRadius: 0 }}>
        <LanguageIcon />
        <Box width={8}></Box>
        <TypographyAtom
          color="info.100"
          fontSize="16px"
          fontWeight="500"
          lineHeight="20px"
        >
          {currentLang}
        </TypographyAtom>

        <Box width={8}></Box>
        {anchorEl ? <UpIcon /> : <DownIcon />}
      </IconButton>

      <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        sx={{ "& .MuiMenu-paper": { backgroundColor: "info.800" } }}
      >
        <LanguagesList languages={languages} />
      </Menu>
    </>
  );
}

export default LanguagesMenuHolder;
