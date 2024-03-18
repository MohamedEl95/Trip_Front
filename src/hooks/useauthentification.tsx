import { useMutation } from "react-query";
import { useNotification } from "./useNotification";
import { useTranslations } from "./useTranslation";
import { Paths, useCustomNavigate } from "../routes/paths";
import AuthService from "../services/AuthService";
import { ClientActivate, ClientLogin, ClientRegister } from "../interfaces/clientintrface";
import { useDispatch } from "react-redux";
import { setAuthStatus, setEmail } from "../redux/features/clientSlice";


export const useActivate = () => {
  const ActivateMutation = useMutation(AuthService.activate);
  const { displayNotification } = useNotification();
  const { translations } = useTranslations();
  const Mynavigate = useCustomNavigate();
  const dispatch = useDispatch();
  const AcitvateUser = async (user: ClientActivate) => {
    try {
      await ActivateMutation.mutateAsync(user);
      dispatch(setAuthStatus(true));
      Mynavigate(Paths.authtemplate + Paths.auth.login);
      displayNotification({
        title: "",
        message: translations.success,
        type: "success",
      });
    } catch (error) {
      displayNotification({
        message: translations.error,
        title: "",
        type: "error",
      });
    }
  };
  return {
    AcitvateUser,
    isLoading: ActivateMutation.isLoading,
    isError: ActivateMutation.isError,
  };
};





export const useLogin = () => {
  const loginMutation = useMutation(AuthService.login);
  const { displayNotification } = useNotification();
  const { translations } = useTranslations();
  const Mynavigate = useCustomNavigate();
  const dispatch = useDispatch();
  const loginUser = async (user: ClientLogin) => {
    try {
      await loginMutation.mutateAsync(user);
      dispatch(setAuthStatus(true));
      Mynavigate(Paths.authtemplate + Paths.auth.home);
      displayNotification({
        title: "",
        message: translations.success,
        type: "success",
      });
    } catch (error) {
      displayNotification({
        message: translations.error,
        title: "",
        type: "error",
      });
    }
  };
  return {
    loginUser,
    isLoading: loginMutation.isLoading,
    isError: loginMutation.isError,
  };
};

export const useRegister = () => {
  const registerMutation = useMutation(AuthService.register);
  const { translations } = useTranslations();
  const { displayNotification } = useNotification();
  const Mynavigate = useCustomNavigate();
const dispatch=useDispatch();
  const registerUser = async (user: ClientRegister) => {
    try {
      await registerMutation.mutateAsync(user);

      Mynavigate(Paths.authtemplate + Paths.auth.confirmaacount);
      displayNotification({
        title: "",
        message: translations.success,
        type: "success",
      });
dispatch(setEmail(user.email))
    } catch (error) {
      displayNotification({
        message: translations.error,
        type: "error",
      });
    }
  };

  return {
    registerUser,
    isLoading: registerMutation.isLoading,
    isError: registerMutation.isError,
  };
};
