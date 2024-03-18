import { Outlet } from "react-router-dom";
import Header from "../organisms/header";
import BoxAtom from "../atoms/box";

export const ClientTemplate: React.FC = () => {
  return (
      <BoxAtom sx={{ backgroundColor: "info.500" ,height:"100vh"}}>
      <Header />
      <Outlet />

    </BoxAtom>
  );
};
