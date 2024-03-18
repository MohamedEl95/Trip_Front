import LanguagesMenuHolder from "./LanguagesMenuHolder";

const languages = [
  { key: "En", value: "English" },
  { key: "Fr", value: "Français" },
];

function LanguageSelector() {
  return <LanguagesMenuHolder languages={languages} />;
}

export default LanguageSelector;
