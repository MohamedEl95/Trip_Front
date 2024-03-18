import { useState } from "react";
import Logo from "../../../assets/travel_logo_app.png";
import { useTranslations } from "../../../hooks/useTranslation";
import BoxAtom from "../../atoms/box";
import ButtonAtom from "../../atoms/button";
import TextFieldAtom from "../../atoms/textfield";
import TypographyAtom from "../../atoms/typography";
import { Paths } from "../../../routes/paths";
import Link from "../../molecules/link";
import {
  validateEmail,
  validatePassword,
} from "../../../hooks/validation/usevalidation";
import { useDispatch } from "react-redux";
import { setAuthStatus } from "../../../redux/features/clientSlice";
import { useLogin } from "../../../hooks/useauthentification";
import { ClientLogin } from "../../../interfaces/clientintrface";

export default function LogIn() {
  const { translations } = useTranslations();
  const [user, setUser] = useState<ClientLogin>({
    email: "",
    password: "",
  });
  const handleChangeUser =
    (name: keyof ClientLogin) => (event: { target: { value: string } }) => {
      setUser({ ...user, [name]: event.target.value });
    };
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
  const { loginUser, isLoading } = useLogin();
  const dispatch = useDispatch();
  dispatch(setAuthStatus(false));

  const handleLogin = async () => {
    const emailIsValid = validateEmail(user.email);
    const passwordIsValid = validatePassword(user.password);
    setIsEmailValid(validateEmail(user.email));
    setIsPasswordValid(passwordIsValid);
    if (emailIsValid && passwordIsValid) {
      await loginUser(user);
    }
  };
  return (
    <>
      <img            alt="Logo Login" src={Logo} height="80px" />
      <TypographyAtom component="h1" variant="h5" color={"info.100"}>
        {translations.login}
      </TypographyAtom>
      <BoxAtom component="form" sx={{ mt: 3, width: "80%" }}>
        <TextFieldAtom
          margin="normal"
          size="small"
          required
          fullWidth
          id="email"
          label={translations.email}
          name="email"
          autoComplete="email"
          autoFocus
          variant="outlined"
          sx={{ input: { color: "primary.main" } }}
          InputLabelProps={{
            sx: { color: "primary.main" },
          }}
          color="primary"
          onChange={handleChangeUser("email")}
          error={!isEmailValid}
          helperText={!isEmailValid && translations.emailerror}
        />
        <TextFieldAtom
          margin="normal"
          required
          size="small"
          fullWidth
          name="password"
          label={translations.identifier}
          type="password"
          id="password"
          autoComplete="current-password"
          sx={{ input: { color: "primary.main" } }}
          InputLabelProps={{
            sx: { color: "primary.main" },
          }}
          color="primary"
          onChange={handleChangeUser("password")}
          error={!isPasswordValid}
          helperText={!isPasswordValid && translations.identifiererror}
        />

        <ButtonAtom
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleLogin}
          disabled={isLoading}
        >
          {translations.login}
        </ButtonAtom>
        <Link
          text={translations.register}
          to={Paths.authtemplate + Paths.auth.register}
          style={{
            textAlign: "right",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "20px",
            color: "primary.main",
          }}
        />
      </BoxAtom>
    </>
  );
}
