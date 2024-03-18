import { useTranslations } from "../../../hooks/useTranslation";
import BoxAtom from "../../atoms/box";
import ButtonAtom from "../../atoms/button";
import DatePickerAtom from "../../atoms/datepicker";
import TextFieldAtom from "../../atoms/textfield";
import { CollapseMenuRoom } from "./collapseMenuRoom";


interface FormData {
  startDate: Date | null;
  endDate: Date | null;
  numberOfRooms: string;
  country: string;
}

interface SearchHotelFormProps {
  formData: FormData;
  handleChangeFormData: (
    name: keyof FormData
  ) => (value: string | Date | null) => void;
  handleFilterClick: () => void;
  isStartValid: boolean;
  isEndValid: boolean;
  isCountryValid: boolean;

}



export const SearchHotelForm: React.FC<SearchHotelFormProps> = ({
  formData,
  handleChangeFormData,
  handleFilterClick,
  isStartValid,
  isEndValid,
  isCountryValid,

}) => {
  const {translations}=useTranslations();
  return (
    <BoxAtom
      display={"flex"}
      gap={"10px"}
      sx={{
        flexDirection: { xs: "column", md: "row" },
        width: { xs: "95%", sm: "75%" },
        margin: "0 auto",
        alignItems: { xs: "flex-start", sm: "center" },
      }}
    >
      <DatePickerAtom
        iserror={!isStartValid}
        label={translations.stardate}
        value={formData.startDate}
        onChange={handleChangeFormData("startDate")}
        mindate={undefined} 
      />
      <DatePickerAtom
        iserror={!isEndValid}
        label={translations.enddate}
        value={formData.endDate}
        onChange={handleChangeFormData("endDate")}
        mindate={formData.startDate || undefined} 
      />

      <TextFieldAtom
        required
        label={translations.country}
        name="country"
        variant="outlined"
        fullWidth
        sx={{ input: { minWidth: "160px" }, color: "primary.main" }}
        InputLabelProps={{
          sx: { color: "primary.main" },
        }}
        error={!isCountryValid}
        color="primary"
        inputProps={{ min: 0, max: 10 }}
        value={formData.country}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeFormData("country")(event.target.value)
        }
      />
      <CollapseMenuRoom  />
      <ButtonAtom variant="contained" onClick={handleFilterClick}>
      {translations.filter}
      </ButtonAtom>
    </BoxAtom>
  );
};
