import React, { useState } from "react";

import { ExpandIcon } from "../../atoms/icons/expendIcon";
import Button from "../../atoms/button";
import BoxAtom from "../../atoms/box";
import TypographyAtom from "../../atoms/typography";
import IconButtonAtom from "../../atoms/iconButton";
import CollapseAtom from "../../atoms/collapse";
import { useTranslations } from "../../../hooks/useTranslation";

interface Filter {
  title: string;
  children: React.ReactNode;
  helpertext:string;
}

interface FilterHotelProps {
  filters: Filter[];
}

const FilterHotel: React.FC<FilterHotelProps> = ({ filters }) => {
  const [closedFilters, setClosedFilters] = useState<number[]>([]);

  const handleToggle = (filterIndex: number) => {
    if (closedFilters.includes(filterIndex)) {
      setClosedFilters(
        closedFilters.filter((index) => index !== filterIndex)
      );
    } else {
      setClosedFilters([...closedFilters, filterIndex]);
    }
  };
const { translations }=useTranslations();
  return (
    <BoxAtom position={"sticky"} pt={"15px"} sx={{top:"15px"}}>
      
      {filters.map((filter, index) => (
        <BoxAtom
          key={index}
          my={"20px"}
          sx={{ borderRadius: "15px",  }}
        >
          <BoxAtom
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "info.main",
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
              px: 1,
              borderBottomLeftRadius: !closedFilters.includes(index)
                ? "0px"
                : "15px",
                borderBottomRightRadius: !closedFilters.includes(index)
                ? "0px"
                : "15px",
            }}
          >
            <TypographyAtom
              variant="subtitle1"
              sx={{ flexGrow: 1, color: "info.300" }}
              fontWeight={"bold"} 
            >
              {filter.title}
            </TypographyAtom>
            <IconButtonAtom onClick={() => handleToggle(index)}>
              <ExpandIcon />
            </IconButtonAtom>
          </BoxAtom>
          <CollapseAtom in={!closedFilters.includes(index)} sx={{backgroundColor:"info.800"}}>
            <BoxAtom mt={1} mb={2} px={2} >
            <TypographyAtom
            fontSize={"18px"}
            textAlign={"center"}
            color={"info.100"}
          >
           {filter.helpertext}
          </TypographyAtom>
              {filter.children}
            </BoxAtom>
          </CollapseAtom>
        </BoxAtom>
      ))}
      <Button
        variant="contained"
        color="primary"
        sx={{
          paddingX: "15px",
          paddingY: "10px",
          borderRadius: "15px",
          width: "100%",
        }}
      >
        { translations.clearfilters }
      </Button>
    </BoxAtom>
  );
};

export default FilterHotel;
