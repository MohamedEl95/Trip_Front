import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Hotel } from "../../interfaces/hotelinterface";
import storage from "redux-persist/es/storage";
import { persistReducer } from "redux-persist";
interface Room {
  adults: number;
}
interface ReservationState {
  selectedHotel: Hotel | null;
  selectedRooms: Room[];
  step:number;
}

const initialState: ReservationState = {
  selectedHotel: null,
  selectedRooms: [{ adults: 1 }], // Initial room with one adult
  step:0
};

export const ReservationSlice = createSlice({
  name: "Reservation",
  initialState,
  reducers: {
    setSelectedHotel: (state, action: PayloadAction<Hotel | null>) => {
      state.selectedHotel = action.payload;
    },
    addRoom: (state, action: PayloadAction<Room>) => {
      state.selectedRooms.push(action.payload);
    },
    removeRoom: (state, action: PayloadAction<number>) => {
      state.selectedRooms.splice(action.payload, 1);
    },
    setStep: (state, action: PayloadAction<number>) => {
        state.step=action.payload;
      },
    updateRoom: (
      state,
      action: PayloadAction<{ index: number; room: Room }>
    ) => {
      state.selectedRooms[action.payload.index] = action.payload.room;
    },
  },
});

export const { setSelectedHotel, addRoom, removeRoom, updateRoom ,setStep} =
  ReservationSlice.actions;

const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };
  
  export const persistedReservationtReducer = persistReducer(persistConfig,  ReservationSlice.reducer);