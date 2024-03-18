import TypographyAtom from "../atoms/typography";
import { useTranslations } from "../../hooks/useTranslation";
import ButtonAtom from "../atoms/button";
import BoxAtom from "../atoms/box";
import GridAtom from "../atoms/grid";
import AboutImage from "../../assets/trip_about.png";
import useScroll from "../../hooks/useScroll";
export const AboutSection: React.FC = () => {
  const { translations } = useTranslations();
  const navigateToHotelSection = useScroll('hotels');


  return (
    <GridAtom
      container
      p={"10px"}
      mt={"10px"}
      sx={{ backgroundColor: "info.main" }}
    >
      <GridAtom
        item
        lg={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TypographyAtom variant="h3" color="info.800" textAlign="center">
          {translations.welcome}
        </TypographyAtom>
        <BoxAtom height={"15px"} />

        <BoxAtom
          p="10px"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TypographyAtom variant="h6" color="info.800">
            {translations.welcomeinformation}
          </TypographyAtom>
          <BoxAtom height={"15px"} />

          <ButtonAtom
            variant="contained"
            color="primary"
            sx={{ margin: "0 auto" }}
            onClick={navigateToHotelSection}
          >
            {translations.explorehotels}
          </ButtonAtom>
        </BoxAtom>
        <BoxAtom height={"15px"} />
      </GridAtom>

      <GridAtom item lg={4} sx={{ margin: "0 auto" }}>
        <img
          src={AboutImage}
          width={"100%"}
          style={{ borderRadius: "25px", maxHeight: "400px" }}
          alt="About Us"
        />
      </GridAtom>
    </GridAtom>
  );
};
