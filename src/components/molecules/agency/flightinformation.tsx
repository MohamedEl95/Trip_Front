import TypographyAtom from "../../atoms/typography";
import Grid from "../../atoms/grid";
import { Reservation } from "../../../interfaces/hotelinterface";
import CardAtom from "../../atoms/card";
import DividerAtom from "../../atoms/divider";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const InfoCard: React.FC<CardProps> = ({ title, children }) => {
  return (
    <CardAtom variant="outlined" sx={{ height: "100%", p: 1, backgroundColor: "info.500", boxShadow: 3,borderRadius:"25px" }}>
      <TypographyAtom variant="h6" gutterBottom fontWeight={"bold"} fontSize={"20px"} textAlign={"center"} color={"primary.main"}>
        {title}
      </TypographyAtom>
      <DividerAtom />
      {children}
    </CardAtom>
  );
};

interface FlightInformationProps {
  reservation: Reservation;
}

const FlightInformation: React.FC<FlightInformationProps> = ({ reservation }) => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={4} sm={12}>
        <InfoCard title="Flight Information">
          <TypographyAtom variant="subtitle1" color={"info.100"}>
            Airport: {reservation.flight?.airport}
          </TypographyAtom>
          <TypographyAtom variant="subtitle1" color={"info.100"}>
            Airline: {reservation.flight?.airline}
          </TypographyAtom>
          <TypographyAtom variant="subtitle1" color={"info.100"}>
            Start Date: {reservation.flight?.startFlightDate}
          </TypographyAtom>
          <TypographyAtom variant="subtitle1" color={"info.100"}>
            End Date: {reservation.flight?.endFlightDate}
          </TypographyAtom>
        </InfoCard>
      </Grid>
      <Grid item lg={4} sm={12}>
        <InfoCard title="Airline Information">
          <TypographyAtom variant="subtitle1" color={"info.100"}>
            Airline Name: {reservation.flight?.airline}
          </TypographyAtom>
          <TypographyAtom variant="subtitle1" color={"info.100"}>
            Airline Contact: {reservation.flight?.airlineContact}
          </TypographyAtom>
        </InfoCard>
      </Grid>
      <Grid item lg={4} sm={12}>
        <InfoCard title="Airport Information">
          <TypographyAtom variant="subtitle1" color={"info.100"}>
            Airport Address: {reservation.flight?.airportAddress}
          </TypographyAtom>
        </InfoCard>
      </Grid>
    </Grid>
  );
};

export default FlightInformation;
