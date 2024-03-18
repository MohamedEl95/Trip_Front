import { NotificationState } from "../hooks/useNotification";
import {
  NotificationReducer,
  NotificationActions,
} from "../redux/features/notificationSlice";

describe("Notification Slice", () => {
  it("should add a notification", () => {
    const initialState:NotificationState = {
      open: false,
      type: "success",
      message: "",
      title: "",
    };
    const notification:NotificationState = {
      open: true,
      type: "error",
      message: "Error!",
      title: "Error Title",
    };
    const nextState = NotificationReducer(
      initialState,
      NotificationActions.addNotification(notification)
    );

    expect(nextState).toEqual({ ...initialState, ...notification, open: true });
  });

  it("should clear the notification", () => {
    const initialState:NotificationState = {
      open: true,
      type: "success",
      message: "Success!",
      title: "Success Title",
    };
    const nextState = NotificationReducer(
      initialState,
      NotificationActions.clearNotification()
    );

    expect(nextState).toEqual({ ...initialState, open: false });
  });


});
