import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import enTranslations from "./en";
import frTranslations from "./fr";
import { Translations } from "./translationInterface";
export const defaultLang = "Fr";
export const supportedLangs: Record<string, string> = {
  En: "English",
  Fr: "Français",
};
interface I18nState {
  lang: string; 
  supportedLangs: Record<string, string>; 
  translations: Record<string, Translations>; 
}
const initialState: I18nState = {
  lang: defaultLang,
  supportedLangs: { ...supportedLangs },
  translations: {
    En: enTranslations,
    Fr: frTranslations,
  },
};
export const i18nSlice = createSlice({
  name: "i18n",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
  },
});
export const selectTranslations = (state: { i18n: I18nState }) =>
  state.i18n.translations[state.i18n.lang];
export const { setLanguage } = i18nSlice.actions;
const persistConfig = {
  key: "i18n",
  storage,
  whitelist: ["lang"], 
};
 const i18nReducer = i18nSlice.reducer;
 const persistedI18nReducer = persistReducer(persistConfig, i18nReducer);
export default persistedI18nReducer;