import React, { useState } from "react";
import BoxAtom from "../../atoms/box";
import TextFieldAtom from "../../atoms/textfield";
import Table from "../../molecules/table";
import TableRow from "../../atoms/tableRow";
import TableCell from "../../atoms/tableCell";
import DialogAtom from "../../atoms/dialog";
import TypographyAtom from "../../atoms/typography";
import ButtonAtom from "../../atoms/button";
import GridAtom from "../../atoms/grid";
import CardMediaAtom from "../../atoms/cardMedia";
import { useClientByFullName } from "../../../hooks/useclient";
import { useNotification } from "../../../hooks/useNotification";
const urlImageAPI = import.meta.env.VITE_API_REST;

const BookingSection: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [open, setOpen] = useState(false);

  const { getClientByFullName } = useClientByFullName(
    firstName,
    lastName
  );
  const { data } = getClientByFullName();
  const { displayNotification } = useNotification();

  const handleSearchClick = async () => {
    try {
       getClientByFullName(); // Call the API

      // Open the dialog only if data is available
      if (data) {
        setOpen(true);
      }
      else {
        displayNotification({
          type: "error",
          message: "",
          title: "Error",
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const clientInformation = [
    { label: "Full Name", value: data?.lastname + " " + data?.firstname },
    { label: "Email", value: data?.email },
    { label: "Passport", value: data?.numpassport },
    { label: "Date of Birth", value: data?.date_birth },
    { label: "Phone Number", value: data?.phoneNumber },
  ];

  const hotelInformation = [
    { label: "Check-In Date", value: data?.trip?.checkInDate },
    { label: "Type", value: data?.trip?.type },
    { label: "Check-Out Date", value: data?.trip?.checkOutDate },
    { label: "Hotel Name", value: data?.trip?.hotel?.name },
    { label: "Hotel Address", value: data?.trip?.hotel?.address },
    { label: "Hotel Phone Number", value: data?.trip?.hotel?.phoneNumber },
  ];

  return (
    <>
      <BoxAtom
        sx={{
          margin: "0 auto",
          backgroundColor: "info.main",
          borderRadius: "25px",
          width: { xs: "80%", lg: "50%", sm: "70%" },
        }}
        p={"20px"}
        id="reservationSection"
      >
        <TypographyAtom
          variant="h6"
          gutterBottom
          textAlign={"center"}
          color={"info.800"}
        >
          Find my reservation
        </TypographyAtom>
        <BoxAtom
          display={"flex"}
          justifyContent={"center"}
          gap={"15px"}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            margin: "0 auto",
            backgroundColor: "info.main",
            borderRadius: "25px",
          }}
          p={"20px"}
        >
          <TextFieldAtom
            label="First Name"
            variant="outlined"
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            color="secondary"
            sx={{ input: { color: "info.800" } }}
            InputLabelProps={{
              sx: { color: "info.800" },
            }}
          />
          <TextFieldAtom
            label="Last Name"
            variant="outlined"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            color="secondary"
            sx={{ input: { color: "info.800" } }}
            InputLabelProps={{
              sx: { color: "info.800" },
            }}
          />
          <ButtonAtom
            variant="contained"
            color="primary"
            onClick={handleSearchClick}
          >
            Search
          </ButtonAtom>
        </BoxAtom>
      </BoxAtom>
      <BoxAtom height={"20px"} />
      <DialogAtom open={open} title={""} onClose={handleClose}>
        {open ? (
          <GridAtom container>
            <GridAtom item lg={8} xs={12}>
              <BoxAtom
                sx={{
                  backgroundColor: "info.main",
                  height: "100%",
                }}
              >
                <CardMediaAtom
                  component="img"
                  image={`${urlImageAPI}${data?.trip?.hotel?.image}`}
                  sx={{ height: { xs: "300px", lg: "500px" } }}
                />
              </BoxAtom>
            </GridAtom>
            <GridAtom item lg={4} xs={12}>
              <BoxAtom
                sx={{
                  backgroundColor: "info.main",
                  height: "100%",
                  px: "10px",
                }}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <BoxAtom>
                  <TypographyAtom
                    variant="h6"
                    textAlign={"center"}
                    color="primary.main"
                    fontWeight={"bold"}
                    fontSize={"25px"}
                  >
                    Client Information
                  </TypographyAtom>
                  <Table headers={[]}>
                    {clientInformation.map((info, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <TypographyAtom color="info.800" fontWeight={"bold"}>
                            {info.label}
                          </TypographyAtom>
                        </TableCell>
                        <TableCell>
                          <TypographyAtom color="info.800">
                            {info.value}
                          </TypographyAtom>
                        </TableCell>
                      </TableRow>
                    ))}
                  </Table>
                </BoxAtom>
                <BoxAtom>
                  <TypographyAtom
                    variant="h6"
                    textAlign={"center"}
                    color="primary.main"
                    fontWeight={"bold"}
                    fontSize={"25px"}
                  >
                    Booking Details
                  </TypographyAtom>
                  <Table headers={[]}>
                    {hotelInformation.map((info, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <TypographyAtom color="info.800" fontWeight={"bold"}>
                            {info.label}
                          </TypographyAtom>
                        </TableCell>
                        <TableCell>
                          <TypographyAtom color="info.800">
                            {info.value}
                          </TypographyAtom>
                        </TableCell>
                      </TableRow>
                    ))}
                  </Table>
                </BoxAtom>
              </BoxAtom>
            </GridAtom>
          </GridAtom>
        ) : null}
      </DialogAtom>
    </>
  );
};

export default BookingSection;
