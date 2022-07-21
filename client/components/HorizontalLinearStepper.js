import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

export default function HorizontalLinearStepper() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={3}>
        <Step>
          <StepLabel>A</StepLabel>
        </Step>
        <Step>
          <StepLabel>A</StepLabel>
        </Step>
        <Step>
          <StepLabel>A</StepLabel>
        </Step>
        <Step>
          <StepLabel>A</StepLabel>
        </Step>
      </Stepper>
    </Box>
  );
}
