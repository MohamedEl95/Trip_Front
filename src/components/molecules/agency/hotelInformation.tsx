// HotelInformation.jsx
import React from "react";
import { Grid, CardMedia, Typography } from "@mui/material";
import Table from "../table";
import TableRow from "../../atoms/tableRow";
import TableCell from "../../atoms/tableCell";
import DividerAtom from "../../atoms/divider";
import { Reservation } from "../../../interfaces/hotelinterface";
import CardAtom from "../../atoms/card";
import TypographyAtom from "../../atoms/typography";

interface HotelInformationProps {
  reservation: Reservation;
}

const HotelInformation: React.FC<HotelInformationProps> = ({ reservation }) => {
  return (
    <Grid item lg={9} sm={12}>
      <Grid container spacing={2}>
        <Grid item lg={6} sm={12} display={"flex"} gap={"10px"} flexDirection={"column"}>
       
          <Table headers={["Room Type", "Room Number",'Extra']} size="small">
            {reservation.rooms.map((room, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TypographyAtom color="info.100">{room.type}</TypographyAtom>
                </TableCell>
                <TableCell>
                  <TypographyAtom color="info.100">{room.number}</TypographyAtom>
                </TableCell>  
                <TableCell>
                  <TypographyAtom color="info.100">no</TypographyAtom>
                </TableCell>  
                            </TableRow>
            ))}
          </Table>
          <CardAtom
            variant="outlined"
            sx={{ p: 1, backgroundColor: "info.500", boxShadow: 3 }}
          >
            <Typography
              variant="h6"
              gutterBottom
              color={"primary.main"}
              fontWeight={"bold"}
              textAlign={"center"}
            >
              Hotel Contact
            </Typography>
            <DividerAtom />

            <Typography variant="subtitle1" color={"info.100"}>
              Hotel Name: {reservation.hotelName}
            </Typography>
            <Typography variant="subtitle1" color={"info.100"}>
              Hotel Phone: {reservation.hotelContact?.phone}
            </Typography>
            <Typography variant="subtitle1" color={"info.100"}>
              Hotel Email: {reservation.hotelContact?.email}
            </Typography>
          </CardAtom>
        </Grid>
        <Grid item lg={6} sm={12}>
          <CardMedia
            component="img"
            height="300"
            image="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"
            alt="Hotel"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HotelInformation;
