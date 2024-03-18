import { useSelector } from "react-redux";
import { selectTranslations } from "../redux/features/translation/i18nslice";

export function useTranslations() {
  const translations = useSelector(selectTranslations);
  return {
    translations,
  };
}