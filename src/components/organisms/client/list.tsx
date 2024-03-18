import React from "react";
import { Grid, Card, Typography, Button, Avatar } from "@mui/material";
import RatingAtom from "../../atoms/rating";
import BoxAtom from "../../atoms/box";
import { useTranslations } from "../../../hooks/useTranslation";
import { Hotel } from "../../../interfaces/hotelinterface";
import { useDispatch } from "react-redux";
import { setStep } from "../../../redux/features/reservationSlice";

interface HotelListProps {
  hotels: Hotel[];
}

const HotelList: React.FC<HotelListProps> = ({ hotels }) => {
  const { translations } = useTranslations();
  const dispatch = useDispatch();
  return (
    <>
      {hotels.map((hotel) => (
        <Grid item xs={12} key={hotel.id}>
          <Card
            sx={{
              padding: "10px",
              margin: "20px",
              borderRadius: "15px",
              backgroundColor: "info.800",
            }}
          >
            <Grid container spacing={2}>
              <Grid item sm={12} lg={3} width={"100%"}>
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  style={{
                    height: "225px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </Grid>
              <Grid item sm={12} lg={6}>
                <Typography
                  variant="h5"
                  component="div"
                  color={"info.main"}
                  fontWeight={"bold"}
                >
                  {hotel.name}
                </Typography>
                <BoxAtom height={"15px"} />
                <Typography variant="body2" color={"info.100"}>
                  {hotel.address}
                </Typography>
                <RatingAtom
                  name={`rating-${hotel.id}`}
                  value={hotel.rating}
                  precision={0.5}
                />
                <BoxAtom height={"15px"} />

                <Typography variant="body2" color={"info.100"}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </Typography>
              </Grid>
              <Grid
                item
                sm={12}
                lg={3}
                display={"flex"}
                justifyContent={"space-between"}
                flexDirection={"column"}
                width={"100%"}
              >
                <BoxAtom
                  display={"flex"}
                  gap={"8px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  px={2}
                >
                  <Typography
                    variant="body1"
                    gutterBottom
                    fontSize={"18px"}
                    fontWeight={"bold"}
                    color={"info.100"}
                  >
                    Good
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    fontSize={"14px"}
                    color={"info.100"}
                  >
                    {translations.reviewers}
                  </Typography>
                  <Avatar sx={{ backgroundColor: "info.main" }}>4,7</Avatar>
                </BoxAtom>
                <BoxAtom>
                  <Typography
                    variant="body1"
                    gutterBottom
                    fontSize={"18px"}
                    color={"info.100"}
                  >
                    {translations.discount}: 10$
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    fontSize={"18px"}
                    color={"info.main"}
                  >
                    {translations.price}: {hotel.price} $
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      paddingX: "15px",
                      paddingY: "10px",
                      borderRadius: "15px",
                      width: "100%",
                    }}
                    onClick={()=>dispatch(setStep(1))}
                  >
                    {translations.checkavailable}
                  </Button>
                </BoxAtom>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default HotelList;
