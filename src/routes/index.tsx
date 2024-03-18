import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Paths } from "./paths";
import CircularProgress from "../components/atoms/circularProgress";
import { AuthTemplate } from "../components/molecules/authTemplate";
import LogIn from "../components/organisms/auth/login";
import Register from "../components/organisms/auth/register";
import { NotFound } from "../components/molecules/notfound";
import Home from "../components/organisms/home";
import { AgencyTemplate } from "../components/organisms/agencyTemplate";
import ReservationList from "../components/organisms/agency/reservationList";
import { ClientTemplate } from "../components/molecules/clientTemplate";
import { BookDossier } from "../components/organisms/client/book";

function ListRoutes() {
  return (
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path="*" element={<NotFound />} />

          <Route path={Paths.clienttemplate} element={<ClientTemplate />}>
          <Route path={Paths.client.book} element={<BookDossier/>} />
          <Route path={Paths.client.home} element={<Home />} />

          </Route>

          <Route path={Paths.authtemplate} element={<AuthTemplate />}>
            <Route path={Paths.auth.login} element={<LogIn />} />
            <Route path={Paths.auth.register} element={<Register/>} />

          </Route>
          <Route path={Paths.agencytemplate} element={<AgencyTemplate />}>
          <Route path=""element={<ReservationList />} />

          </Route>

        </Routes>
      </Suspense>
  );
}

export default ListRoutes;
