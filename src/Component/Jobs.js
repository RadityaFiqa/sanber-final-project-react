import React from "react";
import Job from "./Job";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@material-ui/icons/";
import {
  TextField,
  Typography,
  Button,
  MobileStepper,
} from "@material-ui/core";

const Jobs = (props) => {
  const { datane, onSearchHandle } = props;

  const [activeStep, setActiveStep] = React.useState(0);
  const numJobs = datane.length;

  const numPages = Math.ceil(numJobs / 25);
  const jobsOnPage = datane.slice(activeStep * 25, activeStep * 25 + 25);

  const useStyles = makeStyles({
    root: {
      maxWidth: 400,
      flexGrow: 1,
    },
  });

  const classes = useStyles();
  const theme = useTheme();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const OnChangeInput = (value) => {
    onSearchHandle(value);
  };

  return (
    <div className="jobs">
      <div className="head">
        <Typography variant="h2">Github Job Desk</Typography>
        <TextField
          id="outlined-basic"
          label="Search Job"
          variant="outlined"
          onChange={(e) => OnChangeInput(e.target.value)}
        />
      </div>
      {jobsOnPage.map((data, index) => (
        <Job key={index} data={data} />
      ))}
      <div className="pagination">
        <MobileStepper
          variant="dots"
          steps={numPages}
          position="static"
          activeStep={activeStep}
          className={classes.root}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === numPages - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default Jobs;
