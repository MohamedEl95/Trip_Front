import { Outlet } from "react-router-dom";
import Welcome from "../../assets/welcome.jpg";
import GridAtom from "../atoms/grid";
import BoxAtom from "../atoms/box";
import { DarkModeToggle } from "./darkModeToggle";
import LanguageSelector from "./LanguageSelector";

export const AuthTemplate: React.FC = () => {
  return (
      <GridAtom
        container
        component="main"
        sx={{ height: "100vh", backgroundColor: "info.800" }}
      >
        <GridAtom
          item
          xs={false}
          sm={false}
          md={6}
          sx={{
            backgroundImage: `url(${Welcome})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <GridAtom item xs={12} sm={12} md={6}>
          <BoxAtom
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              height: "40px",
            }}
          >
            <DarkModeToggle />
            <LanguageSelector />
          </BoxAtom>

          <BoxAtom
            sx={{
              height: "calc(100% - 40px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              px: 1,
            }}
          >
            <Outlet />
          </BoxAtom>
        </GridAtom>
      </GridAtom>
  );
};
