import TypographyAtom from "../../atoms/typography";
import GridAtom from "../../atoms/grid";
import IconButtonAtom from "../../atoms/iconButton";
import DividerAtom from "../../atoms/divider";
import { UpIcon } from "../../atoms/icons/upIcon";
import { DownIcon } from "../../atoms/icons/downIcon";
import CollapseAtom from "../../atoms/collapse";
import { RemoveIcon } from "../../atoms/icons/removeIcon";
import { AddIcon } from "../../atoms/icons/addIcon";
import { CancelIcon } from "../../atoms/icons/cancelIcon";
import { useTranslations } from "../../../hooks/useTranslation";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../../../redux/store";
import { addRoom, removeRoom, updateRoom } from "../../../redux/features/reservationSlice";
import ButtonAtom from "../../atoms/button";
import BoxAtom from "../../atoms/box";


export const CollapseMenuRoom: React.FC = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const rooms = useSelector((state: RootState) => state.reservation.selectedRooms);
  const { translations } = useTranslations();

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleAddRoom = () => {
    if (rooms.length > 2) return;
    dispatch(addRoom({ adults: 1 }));
  };

  const handleAdultsChange = (index: number, newValue: number) => {
    if (newValue > 4 || newValue < 1) return;
  
    const updatedRooms = rooms.map((room, i) => {
      if (i === index) {
        return { ...room, adults: newValue };
      }
      return room;
    });
  
    dispatch(updateRoom({ index, room: updatedRooms[index] }));
  };
  
  

  const handleRemoveRoom = (index: number) => {
 
    dispatch(removeRoom(index));
  };

  return (
    <BoxAtom position="relative" width={"100%"}>
      <ButtonAtom
        onClick={handleToggle}
        variant="outlined"
        startIcon={open ? <UpIcon /> : <DownIcon />}
        sx={{ height: "52px" ,borderColor:"info.100"}}
        fullWidth
      >
        {translations.rooms}
      </ButtonAtom>
      <CollapseAtom
        in={open}
        sx={{
          position: "absolute",
          top: "100%",
          left: 0,
          zIndex: 1,
          backgroundColor: "info.500",
          borderRadius: "10px",
          width: "100%",
        }}
      >
        <BoxAtom p={2}>
          <GridAtom
            spacing={2}
            alignItems="center"
            display={"flex"}
            justifyContent="flex-end"
            flexDirection={"column"}
          >
            {rooms.map((room, index) => (
              <GridAtom item key={index} width={"100%"}>
                <BoxAtom
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <TypographyAtom
                    variant="body1"
                    gutterBottom
                    color={"info.main"}
                  >
                            {translations.room} {index + 1}
                  </TypographyAtom>
                  {rooms.length > 1 && (
                    <IconButtonAtom onClick={() => handleRemoveRoom(index)}>
                      <CancelIcon />
                    </IconButtonAtom>
                  )}
                </BoxAtom>

                <DividerAtom />
                <BoxAtom
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <TypographyAtom
                    variant="body1"
                    gutterBottom
                    color={"info.100"}
                  >
                            {translations.adults}

                  </TypographyAtom>
                  <BoxAtom display={"flex"} alignItems={"center"} gap={"10px"}>
                    <IconButtonAtom
                      onClick={() =>
                        handleAdultsChange(index, Math.max(0, room.adults - 1))
                      }
                      disabled={room.adults === 1}
                      sx={{ backgroundColor: "info.800", color: "info.100" }}
                    >
                      <RemoveIcon />
                    </IconButtonAtom>
                    <TypographyAtom variant="body1">
                      {room.adults}
                    </TypographyAtom>
                    <IconButtonAtom
                      onClick={() => handleAdultsChange(index, room.adults + 1)}
                      sx={{ backgroundColor: "info.800", color: "info.100" }}
                      disabled={room.adults === 4}
                    >
                      <AddIcon />
                    </IconButtonAtom>
                  </BoxAtom>
                </BoxAtom>
              </GridAtom>
            ))}
          </GridAtom>
          <ButtonAtom
            onClick={handleAddRoom}
            variant="contained"
            color="primary"
            size="small"
            sx={{ width: "100%" }}
            disabled={rooms.length === 3}
          >
            <TypographyAtom variant="body1" color={"info.100"}>
            {translations.addroom}

            </TypographyAtom>
          </ButtonAtom>
        </BoxAtom>
      </CollapseAtom>
    </BoxAtom>
  );
};
