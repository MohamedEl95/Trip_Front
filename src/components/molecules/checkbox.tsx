import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import TypographyAtom from "../atoms/typography";
import DividerAtom from "../atoms/divider";

interface CustomCheckboxProps {
  label: string;
  checked: boolean;
  onChange:(event: any) => void
}

const CheckBox: React.FC<CustomCheckboxProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={onChange}
            sx={{ color: "info.100" }}
          />
        }
        label={
          <TypographyAtom
            fontSize={"18px"}
            textAlign={"center"}
            color={"info.100"}
          >
            {label}
          </TypographyAtom>
        }
      />
      <DividerAtom />
    </>
  );
};

export default CheckBox;
