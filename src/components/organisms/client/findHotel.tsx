import { useState } from "react";
import { SearchHotelForm } from "../../molecules/client/searchHotelForm";
import FilterHotel from "../../molecules/client/filterHotel";
import GridAtom from "../../atoms/grid";
import TypographyAtom from "../../atoms/typography";
import {  Slider } from "@mui/material";
import BoxAtom from "../../atoms/box";
import RatingAtom from "../../atoms/rating";
import HotelList from "./list";
import CheckBox from "../../molecules/checkbox";
import { useTranslations } from "../../../hooks/useTranslation";



export const FindHotel: React.FC = () => {
  const hotels = [
    {
      email:"",
      website:"",
      phoneNumber:"",
      ville:"",
      id: 1,
      name: "Hotel A",
      address: "123 Main St",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIyajnnESu31PsnREKF5_lLqP9T9_7xToL2zF65DyDhA&s",
      price: "100",
      rating: 4.5,
    },
    {
      email:"",
      website:"",
      phoneNumber:"",
      ville:"",
      id: 2,
      name: "Hotel B",
      address: "456 Elm St",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIyajnnESu31PsnREKF5_lLqP9T9_7xToL2zF65DyDhA&s",
      price: "150",
      rating: 4,
    },
  ];
  const [formData, setFormData] = useState({
    startDate: null,
    endDate: null,
    numberOfRooms: "",
    country: "",
  });
  const { translations }=useTranslations();

  const [isStartValid, setIsStartValid] = useState<boolean>(true);
  const [isEndValid, setIsEndValid] = useState<boolean>(true);
  const [isCountryValid, setIsCountryValid] = useState<boolean>(true);

  const handleChangeFormData =
    (name: keyof typeof formData) => (value: string | Date | null) => {
      setFormData({ ...formData, [name]: value });
    };
  const handleFilterClick = () => {
    let isValid = true;
    if (!formData.startDate) {
      setIsStartValid(false);
      isValid = false;
    } else {
      setIsStartValid(true);
    }
    if (!formData.endDate) {
      setIsEndValid(false);
      isValid = false;
    } else {
      setIsEndValid(true);
    }
    if (!formData.country) {
      setIsCountryValid(false);
      isValid = false;
    } else {
      setIsCountryValid(true);
    }
    if (isValid) {
      console.log("valid")
    }
    //completeStep()
  };
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [rating, setRating] = useState<number>(3);

  const handlePriceChange = (event: Event, newValue) => {
    setPriceRange(newValue);
  };
  const handleRatingChange = (event: Event, newValue: number | number[]) => {
    setRating(newValue as number);
  };
  const filteredHotels = hotels.filter(
    (hotel) =>
    
      hotel.rating >= rating
  );
  const [customFilters, setCustomFilters] = useState({
    parkingIncluded: false,
    wifiIncluded: false,
  });
  const handleCustomFilterChange = (filterName: any) => (event) => {
    setCustomFilters({ ...customFilters, [filterName]: event.target.checked });
  };
  const filters = [
    {
      title: translations.pricefilter,
      helpertext:translations.helperpricefilter,
      children: (
        <>
          <TypographyAtom
            fontSize={"18px"}
            textAlign={"center"}
            color={"info.100"}
          >
            {priceRange[0]}$ - &nbsp; &nbsp; {priceRange[1]}$
          </TypographyAtom>
          <Slider
            defaultValue={[0, 1000]}
            value={priceRange}
            valueLabelDisplay="auto"
            onChange={handlePriceChange}
            max={1000}
            min={0}
          />
        </>
      ),
    },
    {
      title: translations.ratingfilter,
      helpertext:translations.helperratingfilter,
      children: (
        <BoxAtom
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <RatingAtom sx={{}} value={rating} precision={0.5} disabled />
          <Slider
            defaultValue={3}
            value={rating}
            valueLabelDisplay="auto"
            onChange={handleRatingChange}
            max={5}
            min={1}
            step={0.5}
          />
        </BoxAtom>
      ),
    },
    {
      title: translations.customfilter,
      helpertext: "",
      children: (
        <>
          <CheckBox
            label={translations.parkingincluded}
            checked={customFilters.parkingIncluded}
            onChange={handleCustomFilterChange("parkingIncluded")}
          />
          <CheckBox
            label={translations.wifiincluded}
            checked={customFilters.wifiIncluded}
            onChange={handleCustomFilterChange("wifiIncluded")}
          />
        </>
      ),
    }
  ];

  return (
      <BoxAtom sx={{ padding: "20px", backgroundColor: "info.500" }}>
        <SearchHotelForm
          formData={formData}
          handleChangeFormData={handleChangeFormData}
          handleFilterClick={handleFilterClick}
          isStartValid={isStartValid}
          isEndValid={isEndValid}
          isCountryValid={isCountryValid}
        />
        <GridAtom container spacing={2}>
          <GridAtom item xs={12} md={3}>
            <FilterHotel filters={filters} />
          </GridAtom>
          <GridAtom item xs={12} md={9}>
            <HotelList hotels={filteredHotels} />
          </GridAtom>
        </GridAtom>
      </BoxAtom>
  );
};
