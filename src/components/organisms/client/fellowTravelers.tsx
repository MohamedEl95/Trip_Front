import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import BoxAtom from "../../atoms/box";
import TypographyAtom from "../../atoms/typography";
import GridAtom from "../../atoms/grid";
import TextFieldAtom from "../../atoms/textfield";
import Button from "../../atoms/button";
import { setStep } from "../../../redux/features/reservationSlice";
import { useTranslations } from "../../../hooks/useTranslation";

export const FellowTravelers: React.FC = () => {
  const rooms = useSelector(
    (state: RootState) => state.reservation.selectedRooms
  );
  const [travelers, setTravelers] = useState<
    { Name: string; passport: string }[][]
  >(() =>
    rooms.map((room) =>
      Array.from({ length: room.adults }, () => ({ Name: "", passport: "" }))
    )
  );
  const dispatch = useDispatch();
  const handleInputChange = (
    roomIndex: number,
    travelerIndex: number,
    field: string,
    value: string
  ) => {
    const updatedTravelers = [...travelers];
    updatedTravelers[roomIndex][travelerIndex] = {
      ...updatedTravelers[roomIndex][travelerIndex],
      [field]: value,
    };
    setTravelers(updatedTravelers);
  };
  const { translations } = useTranslations();

  return (
    <>
      {rooms.map((room, roomIndex) => (
        <BoxAtom
          key={roomIndex}
          sx={{
            padding: "16px",
            marginBottom: "16px",
          }}
        >
          <TypographyAtom variant="h6" gutterBottom color={"info.100"}>
            {translations.room} {roomIndex + 1}
          </TypographyAtom>
          {[...Array(room.adults)].map((_, travelerIndex) => (
            <GridAtom container spacing={1} key={travelerIndex}>
              <GridAtom
                item
                lg={2}
                xs={12}
                display={"flex"}
                alignItems={"center"}
              >
                <TypographyAtom
                  textAlign={"center"}
                  width={"100%"}
                  color={"info.100"}
                >
                  {" "}
                  {translations.adult} {travelerIndex + 1}
                </TypographyAtom>
              </GridAtom>
              <GridAtom item lg={5} xs={6}>
                <TextFieldAtom
                  label={translations.fullname}
                  fullWidth
                  variant="outlined"
                  value={travelers[roomIndex][travelerIndex].Name}
                  size="small"
                  onChange={(e) =>
                    handleInputChange(
                      roomIndex,
                      travelerIndex,
                      "Name",
                      e.target.value
                    )
                  }
                  sx={{
                    marginBottom: "8px",
                    input: { color: "info.100" },
                    color: "primary.main",
                  }}
                  InputLabelProps={{
                    sx: { color: "primary.main" },
                  }}
                />
              </GridAtom>
              <GridAtom item lg={5} xs={6}>
                <TextFieldAtom
                  label={translations.passport}
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={travelers[roomIndex][travelerIndex].passport}
                  onChange={(e) =>
                    handleInputChange(
                      roomIndex,
                      travelerIndex,
                      "passport",
                      e.target.value
                    )
                  }
                  sx={{
                    marginBottom: "8px",
                    input: { color: "info.100" },
                    color: "primary.main",
                  }}
                  InputLabelProps={{
                    sx: { color: "primary.main" },
                  }}
                />
              </GridAtom>
            </GridAtom>
          ))}
        </BoxAtom>
      ))}
      <BoxAtom display={"flex"} gap={"8px"} justifyContent={"center"}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            paddingX: "15px",
            paddingY: "10px",
            borderRadius: "15px",
          }}
          onClick={() => dispatch(setStep(2))}
        >
          {translations.continue}
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            paddingX: "15px",
            paddingY: "10px",
            borderRadius: "15px",
          }}
          onClick={() => dispatch(setStep(0))}
        >
          {translations.cancel}
        </Button>
      </BoxAtom>
    </>
  );
};
