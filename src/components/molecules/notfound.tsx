import { useTranslations } from "../../hooks/useTranslation";
import BoxAtom from "../atoms/box";
import TypographyAtom from "../atoms/typography";

export const NotFound = () => {
  const { translations } = useTranslations();

  return (
    <BoxAtom display="flex" justifyContent="center" alignItems="center">
      <TypographyAtom  fontSize="18px" color="error.main">
      {translations.notfoundpage}
  </TypographyAtom>
    </BoxAtom>
  );
};