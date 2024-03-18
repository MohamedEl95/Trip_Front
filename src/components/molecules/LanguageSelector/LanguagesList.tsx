import { List, ListItemText, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../../redux/features/translation/i18nslice";
import { RootState } from "../../../redux/store";

function LanguagesList(props: {
  readonly languages: ReadonlyArray<{
    key: string;
    value: string;
  }>;
}) {
  const dispatch = useDispatch();
  const { languages } = props;
  const currentLang = useSelector((state: RootState) => state.i18n.lang);

  return (
    <List sx={{ minWidth: "10rem" }}>
      {languages.map((el) => (
        <MenuItem
          dense
          key={el.key}
          className={el.key === currentLang ? "selected" : ""}
          disabled={el.key === currentLang}
          selected={el.key === currentLang}
          onClick={() => dispatch(setLanguage(el.key))}
          sx={{ fontSize: currentLang === el.key ? "1em" : "1.2em" }}
        >
          <ListItemText primary={el.value} sx={{color:"info.100"}} />
        </MenuItem>
      ))}
    </List>
  );
}

export default LanguagesList;
