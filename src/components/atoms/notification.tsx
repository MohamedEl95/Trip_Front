import {
    Snackbar,
    Alert,
    SnackbarCloseReason,
    AlertTitle,
  } from "@mui/material";
  import { useSelector } from "react-redux";
import { useNotification } from "../../hooks/useNotification";
import { RootState } from "../../redux/store";


  export const Notification = (): JSX.Element => {
    const notification = useSelector((state: RootState) => state.notification);
    const { clearNotification } = useNotification();
    const handleClose = (_: unknown, reason?: SnackbarCloseReason) =>
      reason !== "clickaway" && clearNotification();
  
    return (
        <Snackbar
          open={notification.open}
          autoHideDuration={2000}
          onClose={handleClose}
          data-testid="notification"
        >
          <Alert
            variant="filled"
            onClose={handleClose}
            severity={notification.type}
          >
            <AlertTitle>{notification.title?notification.title : ""}</AlertTitle>
            {notification.message}
          </Alert>
        </Snackbar>
    );
  };