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
  validatePhoneNumber,
} from "../../../hooks/validation/usevalidation";
import { ClientRegister } from "../../../interfaces/clientintrface";
import { useRegister } from "../../../hooks/useauthentification";

export default function Register() {
  const { translations } = useTranslations();
  const [user, setUser] = useState<ClientRegister>({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    address: "",
    phonenumber: "",
  });

  const handleChangeUser =
    (name: keyof ClientRegister) => (event: { target: { value: string } }) => {
      setUser({ ...user, [name]: event.target.value });
    };

  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(true);

  const { registerUser, isLoading } = useRegister();

  const handleRegister = async () => {
    const emailIsValid = validateEmail(user.email);
    const passwordIsValid = validatePassword(user.password);
    const phoneIsValid = validatePhoneNumber(user.phonenumber);
    setIsPhoneValid(phoneIsValid);

    setIsEmailValid(emailIsValid);
    setIsPasswordValid(passwordIsValid);
    if (emailIsValid && passwordIsValid && phoneIsValid) {
      await registerUser(user);
    }
  };

  return (
    <>
      <img alt="Logo Register" src={Logo} height="80px" />
      <TypographyAtom component="h1" variant="h5" color={"info.100"}>
        {translations.register}
      </TypographyAtom>
      <BoxAtom component="form" sx={{ mt: 3, width: "80%" }}>
        <TextFieldAtom
          margin="normal"
          size="small"
          fullWidth
          required
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
          size="small"
          required
          fullWidth
          id="password"
          label={translations.identifier}
          name="password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          sx={{ input: { color: "primary.main" } }}
          InputLabelProps={{
            sx: { color: "primary.main" },
          }}
          color="primary"
          onChange={handleChangeUser("password")}
          error={!isPasswordValid}
          helperText={!isPasswordValid && translations.identifiererror}
        />
        <TextFieldAtom
          margin="normal"
          size="small"
          required
          fullWidth
          id="phonenumber"
          label={translations.phonenumber}
          error={!isPhoneValid}
          name="phonenumber"
          variant="outlined"
          sx={{ input: { color: "primary.main" } }}
          InputLabelProps={{
            sx: { color: "primary.main" },
          }}
          color="primary"
          onChange={handleChangeUser("phonenumber")}
        />
        <TextFieldAtom
          margin="normal"
          size="small"
          fullWidth
          id="firstname"
          label={translations.firstname}
          name="firstname"
          variant="outlined"
          sx={{ input: { color: "primary.main" } }}
          InputLabelProps={{
            sx: { color: "primary.main" },
          }}
          color="primary"
          onChange={handleChangeUser("firstname")}
        />

        <TextFieldAtom
          margin="normal"
          size="small"
          fullWidth
          id="lastname"
          label={translations.lastname}
          name="lastname"
          variant="outlined"
          sx={{ input: { color: "primary.main" } }}
          InputLabelProps={{
            sx: { color: "primary.main" },
          }}
          color="primary"
          onChange={handleChangeUser("lastname")}
        />

        <TextFieldAtom
          margin="normal"
          size="small"
          fullWidth
          id="address"
          label={translations.address}
          name="address"
          variant="outlined"
          sx={{ input: { color: "primary.main" } }}
          InputLabelProps={{
            sx: { color: "primary.main" },
          }}
          color="primary"
          onChange={handleChangeUser("address")}
        />

        <ButtonAtom
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleRegister}
          disabled={isLoading}
        >
          {translations.register}
        </ButtonAtom>
        <Link
          text={translations.login}
          to={Paths.authtemplate + Paths.auth.login}
          style={{
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "20px",
            color: "primary.main",
            textAlign: "right",
          }}
        />
      </BoxAtom>
    </>
  );
}
