import React, { useState } from "react";
import BoxAtom from "../../atoms/box";
import TypographyAtom from "../../atoms/typography";
import GridAtom from "../../atoms/grid";
import ButtonAtom from "../../atoms/button";
import { setStep } from "../../../redux/features/reservationSlice";
import { useDispatch } from "react-redux";
import MapStreet from "../maps/map";
import { useTranslations } from "../../../hooks/useTranslation";

interface Flight {
  id: number;
  source: string;
  destination: string;
  price: number;
  image: string; // URL to the image of the flight
}
interface Coordinate {
  lat: number;
  lng: number;
  name: string; 
  id:string;
}
const FindFlight: React.FC = () => {
  const { translations } = useTranslations();

  const dispatch = useDispatch();
  const [flights,setFlights] = useState<Flight[]>([
    {
      id: 1,
      source: "New York",
      destination: "Los Angeles",
      price: 200,
      image: "ny-la.jpg",
    },
    {
      id: 2,
      source: "New York",
      destination: "Miami",
      price: 150,
      image: "ny-miami.jpg",
    },
    {
      id: 3,
      source: "New York",
      destination: "Chicago",
      price: 100,
      image: "ny-chicago.jpg",
    },
  ]);
  const [source, setSource] = useState<Coordinate | null>(null);
  const [destination, setDestination] = useState<Coordinate | null>(null);

  const handleMarkerClick = (position:Coordinate,isSource:boolean) => {
    if (isSource) {
      setSource(position);
    } else  {
      setDestination(position);
    }
  };
  return (
    <BoxAtom sx={{ padding: "20px", backgroundColor: "info.500" }}>
      <GridAtom container spacing={2} alignItems="center">
        <GridAtom
          item
          xs={12}
          lg={6}
          display={"flex"}
          flexDirection={"column"}
          gap={"8px"}
        >
          <TypographyAtom variant="h6" gutterBottom color={"info.100"}>
            {translations.selectsource}
          </TypographyAtom>
          <TypographyAtom variant="h6" gutterBottom color={"info.100"}>
            {source?.name}
          </TypographyAtom>
          <MapStreet onMarkerClick={handleMarkerClick} isSource={true} />
        </GridAtom>
        <GridAtom
          item
          xs={12}
          lg={6}
          display={"flex"}
          flexDirection={"column"}
          gap={"8px"}
        >
          <TypographyAtom variant="h6" gutterBottom color={"info.100"}>
            {translations.selectdestination}
          </TypographyAtom>
          <TypographyAtom variant="h6" gutterBottom color={"info.100"}>
            {destination?.name}
          </TypographyAtom>
          <MapStreet onMarkerClick={handleMarkerClick} isSource={false}/>
        </GridAtom>
        <GridAtom item xs={12} lg={3}>
          <TypographyAtom variant="h6" gutterBottom color={"info.100"}>
            {translations.selectnumberofreservation}
          </TypographyAtom>
        </GridAtom>
      </GridAtom>
      <BoxAtom mt={4}>
        <TypographyAtom variant="h5" gutterBottom color={"info.100"}>
          {translations.availableflights}
        </TypographyAtom>
        <GridAtom container spacing={2}>
          {flights.map((flight) => (
            <GridAtom item key={flight.id} xs={12} lg={4} sm={6}>
              <BoxAtom
                p={2}
                display={"flex"}
                flexDirection={"column"}
                sx={{ backgroundColor: "info.800", borderRadius: "25px" }}
              >
                <img
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIyajnnESu31PsnREKF5_lLqP9T9_7xToL2zF65DyDhA&s"
                  }
                  alt={flight.destination}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <TypographyAtom
                  variant="h6"
                  color={"info.100"}
                  textAlign={"center"}
                >
                  {flight.destination}
                </TypographyAtom>
                <TypographyAtom
                  variant="body1"
                  color={"info.100"}
                  textAlign={"center"}
                >
                  {translations.price}: ${flight.price}
                </TypographyAtom>
                <ButtonAtom
                  variant="contained"
                  color="primary"
                  sx={{ margin: "0 auto" }}
                >
                  {translations.confirm}
                </ButtonAtom>
              </BoxAtom>
            </GridAtom>
          ))}
        </GridAtom>
      </BoxAtom>
      <BoxAtom
        display={"flex"}
        justifyContent={"center"}
        width={"100%"}
        gap={"8px"}
      >
        {" "}
        <ButtonAtom
          variant="contained"
          color="primary"
          sx={{
            paddingX: "15px",
            paddingY: "10px",
            borderRadius: "15px",
            mt: 1,
          }}
        >
          {translations.continuewithoutflight}
        </ButtonAtom>
        <ButtonAtom
          variant="outlined"
          color="primary"
          sx={{
            paddingX: "15px",
            paddingY: "10px",
            borderRadius: "15px",
            mt: 1,
          }}
          onClick={() => dispatch(setStep(1))}
        >
          {translations.back}
        </ButtonAtom>
      </BoxAtom>
    </BoxAtom>
  );
};

export default FindFlight;
