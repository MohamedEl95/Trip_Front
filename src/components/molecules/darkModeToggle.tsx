import { useTheme } from "../../context/theme";
import { useTranslations } from "../../hooks/useTranslation";
import FormControlLabelAtom from "../atoms/formControlLabel";
import SwitchAtom from "../atoms/switch";
export const DarkModeToggle: React.FC = () => {
  const { translations } = useTranslations();

  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <FormControlLabelAtom
      control={
        <SwitchAtom
          data-testid="darkModeSwitch"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
      }
      label={translations.toggledarkmode}
      sx={{ color: "info.100" }}
    />
  );
};


