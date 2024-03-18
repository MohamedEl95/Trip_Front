import React from "react";
import {
  TableContainer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Table from "../../molecules/table";
import TableRow from "../../atoms/tableRow";
import TableCell from "../../atoms/tableCell";
import BoxAtom from "../../atoms/box";
import TypographyAtom from "../../atoms/typography";
import { DarkModeToggle } from "../../molecules/darkModeToggle";
import HotelInformation from "../../molecules/agency/hotelInformation";
import FlightInformation from "../../molecules/agency/flightinformation";
import { ExpandIcon } from "../../atoms/icons/expendIcon";

// Static data for reservations
const reservations = [
  {
    id: 1,
    guestName: "John Doe",
    date: "2024-02-09",
    time: "10:00 AM",
    table: "Table 1",
    phone: "123-456-7890",
    email: "john@example.com",
    notes: "Special request: Vegetarian meal",
    rooms: [
      { type: "Single", number: 101 },
      { type: "Double", number: 102 },
    ],
    flight: {
      airport: "JFK",
      airportAddress:
        "John F. Kennedy International Airport, Queens, New York, USA",
      airline: "Delta",
      airlineContact: "1-800-221-1212",
      startFlightDate: "2024-02-08",
      endFlightDate: "2024-02-09",
    },
    hotelName: "Sample Hotel",
    hotelContact: {
      phone: "123-456-7890",
      email: "hotel@example.com",
    },
  },
  {
    id: 2,
    guestName: "Jane Smith",
    date: "2024-02-10",
    time: "12:30 PM",
    table: "Table 2",
    phone: "987-654-3210",
    email: "jane@example.com",
    notes: "Special request: Window seat",
    rooms: [
      { type: "Double", number: 201 },
      { type: "Suite", number: 202 },
    ],
    flight: null,
    hotelName: "Another Hotel",
    hotelContact: {
      phone: "987-654-3210",
      email: "hotel2@example.com",
    },
  },
  {
    id: 3,
    guestName: "Alice Johnson",
    date: "2024-02-11",
    time: "7:00 PM",
    table: "Table 3",
    phone: "555-555-5555",
    email: "alice@example.com",
    notes: "",
    rooms: [{ type: "Single", number: 301 }],
    flight: {
      airport: "LAX",
      airportAddress:
        "Los Angeles International Airport, Los Angeles, California, USA",
      airline: "United",
      airlineContact: "1-800-864-8331",
      startFlightDate: "2024-02-10",
      endFlightDate: "2024-02-11",
    },
    hotelName: "Yet Another Hotel",
    hotelContact: {
      phone: "555-555-5555",
      email: "hotel3@example.com",
    },
  },
];

const headers = ["Guest Name", "Date", "Time", "phone"];

const ReservationList = () => {
  return (
    <BoxAtom
      sx={{
        mt: 2,
        backgroundColor: "info.500",
  //      width: "99%",
        borderRadius: "25px",
        height: "95%",
        px: 2,
        overflow:"auto"
      }}
    >
      <DarkModeToggle />

      <TypographyAtom
        variant="h2"
        align="center"
        gutterBottom
        color={"info.100"}
        fontSize={"35px"}
        fontWeight={"bold"}
      >
        Reservation List
      </TypographyAtom>
      <TableContainer sx={{ backgroundColor: "info.800" }}>
        <Table headers={headers}>
          {reservations.map((reservation) => (
            <React.Fragment key={reservation.id}>
              <TableRow>
                <TableCell>
                  <TypographyAtom color="info.100">
                    {reservation.guestName}
                  </TypographyAtom>
                </TableCell>
                <TableCell>
                  <TypographyAtom color="info.100">
                  {reservation.date}
                  </TypographyAtom>
                </TableCell>
                <TableCell>
                  <TypographyAtom color="info.100">
                  {reservation.time}
                  </TypographyAtom>
                </TableCell>
                <TableCell>
                  <TypographyAtom color="info.100">
                  {reservation.phone}
                  </TypographyAtom>
                </TableCell>
              </TableRow>
              {reservation.hotelName && (

              <TableRow>
                <TableCell
                  colSpan={4}
                  sx={{
                    padding: "0px",
                  }}
                >
                  <Accordion
                    sx={{
                      width: "100%",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{
                        backgroundColor: "info.main",
                        color: "info.300",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      Show Hotel Information
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        backgroundColor: "info.800",
                        color: "info.100",
                      }}
                    >
                      <HotelInformation reservation={reservation} />
                    </AccordionDetails>
                  </Accordion>
                </TableCell>
              </TableRow>
                            )}
              {reservation.flight && (

              <TableRow>
                <TableCell
                  colSpan={4}
                  sx={{
                    padding: "0px",
                    paddingBottom:'10px'
                  }}
                >
                  <Accordion
                    sx={{
                      width: "100%",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{
                        backgroundColor: "primary.main",
                        color: "info.800",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      Show Flight Information
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        backgroundColor: "info.800",
                        color: "info.100",
                      }}
                    >
                      <FlightInformation reservation={reservation} />
                    </AccordionDetails>
                  </Accordion>
                </TableCell>
              </TableRow>
                            )}

            </React.Fragment>
          ))}
        </Table>
      </TableContainer>
    </BoxAtom>
  );
};

export default ReservationList;
