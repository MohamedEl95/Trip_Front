import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Typography } from "@mui/material";

interface Props {
  steps: string[];
  activeStep: number;
}

const StepperAtom: React.FC<Props> = ({ steps, activeStep }) => {
  return (
    <Box sx={{ width: "100%" ,backgroundColor:"info.main"}}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label} sx={{ color: "info.main" }}>
            <StepLabel >
              {" "}
              <Typography color={"info.300"}>{label}</Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepperAtom;
