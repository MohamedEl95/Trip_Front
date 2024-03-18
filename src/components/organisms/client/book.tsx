import { useTranslations } from "../../../hooks/useTranslation";
import StepperAtom from "../../atoms/stepper";
import { FindHotel } from "./findHotel";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { FellowTravelers } from "./fellowTravelers";
import FindFlight from "./findFlight";

export const BookDossier: React.FC = () => {
  const { translations } = useTranslations();

  const steps: string[] = [
    translations.findhotel,
    translations.selectfellowtravellers,
    translations.addflight,
  ];
  const activeStep= useSelector((state: RootState) => state.reservation.step);

  return (
    <>
      <StepperAtom steps={steps} activeStep={activeStep} />
      {activeStep == 0 && <FindHotel/>}
      {activeStep == 1 && <FellowTravelers/>}
      {activeStep == 2 && <FindFlight/>}

    </>
  );
};
