import { useDispatch } from "react-redux";
import { NotificationActions } from "../redux/features/notificationSlice";
import { AlertColor } from "@mui/material";
export interface NotificationState {
    open?: boolean;
    type?: AlertColor;
    message?: string;
    title?:string
  }
  
export const useNotification = () => {
  const dispatch = useDispatch();

  const displayNotification = (notification: NotificationState) => {
    dispatch(NotificationActions.addNotification(notification));
  };

  const clearNotification = () => {
    dispatch(NotificationActions.clearNotification());
  };

  return { displayNotification, clearNotification } as const;
};