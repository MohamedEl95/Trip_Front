import React from "react";
import BoxAtom from "../../atoms/box";
import TypographyAtom from "../../atoms/typography";
import { useTranslations } from "../../../hooks/useTranslation";
import { Hotel } from "../../../interfaces/hotelinterface";
import CardAtom from "../../atoms/card";
import CardMediaAtom from "../../atoms/cardMedia";
import CardContentAtom from "../../atoms/cardContent";
import SliderAtom from "../../atoms/slider";
import RatingAtom from "../../atoms/rating";
import { useHotels } from "../../../hooks/useHotels";
import ButtonAtom from "../../atoms/button";

const urlImageAPI = import.meta.env.VITE_API_REST;

const HotelList: React.FC = () => {

  const { translations } = useTranslations();
  const { getHotels } = useHotels();
  const { data,  } = getHotels();
  return (
    <BoxAtom sx={{ backgroundColor: "info.500" }}>
      <TypographyAtom variant="h3" color="info.100" textAlign="center">
        {translations.ourhotels}
      </TypographyAtom>
      <BoxAtom width="95%" sx={{ margin: "0 auto" }} id="hotels">

        <BoxAtom height={"10px"}></BoxAtom>

        <SliderAtom>
          {data.map((hotel: Hotel) => (
            <BoxAtom key={hotel.id} sx={{ textAlign: "center" }}>
              <CardAtom
                sx={{ mx: 2, backgroundColor: "info.800", textAlign: "center" }}
              >
                <CardMediaAtom
                  component="img"
                  image={`${urlImageAPI}${hotel.image}`}
                  sx={{ height: "300px" }}
                />
                <CardContentAtom>
                  <ButtonAtom
                    href={hotel.website}
                    sx={{ margin: "auto", display: "block" }}
                  >
                    <TypographyAtom variant="h5" color="info.100">
                      {hotel.name}
                    </TypographyAtom>
                  </ButtonAtom>

                  <TypographyAtom
                    variant="h6"
                    color="info.100"
                    sx={{ marginTop: 1 }}
                  >
                    {hotel.address}
                  </TypographyAtom>

                  <BoxAtom
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 1,
                    }}
                  >
                    <RatingAtom
                      name={`rating-${hotel.id}`}
                      value={hotel.rating}
                      precision={0.5}
                    />
                    <ButtonAtom
                      href={`mailto:${hotel.email}`}
                      variant="contained"
                    >
                      {translations.contacthotel}
                    </ButtonAtom>
                  </BoxAtom>
        
                
                </CardContentAtom>
              </CardAtom>
            </BoxAtom>
          ))}
        </SliderAtom>
      </BoxAtom>
    </BoxAtom>
  );
};

export default HotelList;
