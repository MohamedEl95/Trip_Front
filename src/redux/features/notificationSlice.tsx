import { AlertColor } from "@mui/material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface NotificationState {
  open?: boolean;
  type?: AlertColor;
  message?: string;
  title?:string;
}
 const notificationInitialState: NotificationState = {
  open: false,
  type: "success",
  message: "",
  title:"",
};

export const NotificationSlice = createSlice({
  name: "notification",
  initialState: notificationInitialState,
  reducers: {
    addNotification: (state, action: PayloadAction<NotificationState>) => ({
      ...state,
      ...action.payload,
      open: true,
    }),
    clearNotification: (state) => ({ ...state, open: false }),
  },
});

export const NotificationActions = NotificationSlice.actions;
export const NotificationReducer = NotificationSlice.reducer;