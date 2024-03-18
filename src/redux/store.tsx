import { configureStore } from "@reduxjs/toolkit";
import { NotificationReducer } from "./features/notificationSlice";
import persistedI18nReducer from "./features/translation/i18nslice";
import { persistedClientReducer } from "./features/clientSlice";
import { persistedReservationtReducer } from "./features/reservationSlice";
export const store = configureStore({
  reducer: {
    notification: NotificationReducer,
    i18n: persistedI18nReducer,
    client: persistedClientReducer,
    reservation:persistedReservationtReducer,


  },

});

export type RootState = ReturnType<typeof store.getState>;