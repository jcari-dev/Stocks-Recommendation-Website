import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
const csrftoken = getCookie("csrftoken");

let array_of_responses = [];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  buttons: {
    sell: "#76ff03",
    buy: "#ffc107",
    hold: "#35baf6",
  },
}));

function getSteps() {
  return [
    "Question No.1",
    "Question No.2",
    "Question No.3",
    "Question No.4",
    "Question No.5",
    "Question No.6",
    "Question No.7",
    "Question No.8",
    "Question No.9",
    "Question No.10",
    // "Question No.11",
    // "Question No.12",
    // "Question No.13",
    // "Question No.14",
    // "Question No.15",
    // "Question No.16",
    // "Question No.17",
    // "Question No.18",
    // "Question No.19",
    // "Question No.20",
  ];
}
let count_to_array = [];

function saveQuizInfo(e) {
  console.log(
    e.currentTarget.getAttribute("data-value"),
    e.currentTarget.getAttribute("data-step")
  );

  let step = e.currentTarget.getAttribute("data-step");
  let value = e.currentTarget.getAttribute("data-value");
  let data = [step, value];
  console.log(step);
  localStorage.setItem(`q${step}`, data);
  array_of_responses.push(localStorage.getItem(`q${step}`));

  // console.log(localStorage.getItem(`q${step}`) + '< local storage')
  return array_of_responses;
}


// function sendQuizInfo() {
//   fetch("http://127.0.0.1:8000/send-results/", {
//     method: "post",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       "X-CSRFToken": csrftoken,
//     },
//     body: JSON.stringify({
//       q_array: array_of_responses,
//     }),
//   });
//   return console.log("q_array sent.");
// }



  console.log(array_of_responses);
  if (localStorage.getItem("arrayOfResponses")) {
    localStorage.setItem("arrayOfResponses", array_of_responses);
  } else {
    localStorage.setItem("arrayOfResponses", array_of_responses);
  }
  console.log(localStorage.getItem("arrayOfResponses"));

  let func_to_count = (array_to_count) => {
    let loop_hold = [0];
    for (let y = 0; y < array_to_count; y++) {
      console.log(array_to_count[y]);

      if (array_to_count[y][0] > loop_hold[0]) {
        loop_hold = array_to_count[y];
      } else {
        //
      }
    }
    console.log(loop_hold);
    return loop_hold;
  };
  function calculateQuiz(complete_array_of_responses) {
  //   fetch("http://127.0.0.1:8000/send-results/", {
  //     method: "post",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       "X-CSRFToken": csrftoken,
  //     },
  //     body: JSON.stringify({
  //       q_array: complete_array_of_responses,
  //     }),
  //   });
  //   return console.log("q_array sent.");
  // }

  function getLargestValue() {
    console.log(array_of_responses);

    let buy_count = 0;
    let sell_count = 0;
    let hold_count = 0;

    for (let x = 0; x < array_of_responses.length; x++) {
      console.log("hi");
      if (array_of_responses[x].includes("buy")) {
        buy_count += 1;
      } else if (array_of_responses[x].includes("sell")) {
        sell_count += 1;
      } else {
        hold_count += 1;
      }
    }

    if (buy_count === sell_count) {
    } else if (buy_count === hold_count) {
    }

    count_to_array = [
      [(buy_count / array_of_responses.length) * 100, "buy"],
      [(sell_count / array_of_responses.length) * 100, "sell"],
      [(hold_count / array_of_responses.length) * 100, "hold"],
    ];

    func_to_count(array_of_responses);

    console.log(count_to_array); // CURRENTLY IT GIVES YOU THE AMOUNT OF DATA E.G. 4 / BUY | 1 / SELL | 0 HOLD
    calculateQuiz(count_to_array);
    return count_to_array;
  }

  getLargestValue();

  // let buy_percent = buy_count/array_of_responses.length *100
  // let sell_percent = sell_count/array_of_responses.length *100
  // let hold_percent = hold_count/array_of_responses.length *100

  // console.log(buy_percent, sell_percent, hold_percent)

  // console.dir(
  //   console.log(

  //     localStorage.getItem("q0"),
  //     localStorage.getItem("q1"),
  //     localStorage.getItem("q2"),
  //     localStorage.getItem("q3"),
  //     localStorage.getItem("q4"),
  //     localStorage.getItem("q5"),
  //     localStorage.getItem("q6"),
  //     localStorage.getItem("q7"),
  //     localStorage.getItem("q8"),
  //     localStorage.getItem("q9"),

  //   ),
  //   { depth: null }
  // );

  // 'q_array': [localStorage.getItem('q0'),localStorage.getItem('q1'),localStorage.getItem('q2')]
  //
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `On March 5 2021, Tesla's shares finished below $600 for the first time since Dec. 4, and has lost 15% on the year. What would you do with your TSLA stock?`;
    case 1:
      return "On March 20 2020, Microsoft Corp.'s (MSFT) stock has fallen by a staggering 27% from its peak on February 10. What would you do with your MSFT stock?";
    case 2:
      return `During the third week of August, Apple shares jumped another 5.1% on Friday to close at $497.48, bringing its weekly gains to 8.2%. What would you do with your AAPL stock?`;
    case 3:
      return `From August 5 2020 to August 6 2021, Moderna's shares has risen a 325%. What would you do with your MDRN stock?`;
    // case 4:
    //   return `Clorox shares peaked in August 2020, however, during the last year the shares have lost more than 20% of it's value. What would you do with you CLX stock?  `;
    case 4:
      return `Do you consider yourself a long or short them investor?`;
    case 5:
      return `Occidental Petroleum Corp. (OXY) lost 58% of it's value during the year 2020. What would you do with your OXY stock?`;
    case 6:
      return `American Airlines Group Inc. (AAL) Shares during 2020 lost a 45% of it's value, however, during 2021 the share price has doubled. What would you do with your AAL Stock?`;
    case 7:
      return `PayPal Holdings Inc. (PYPL) Shares soared a 117% during 2020. What would you do with your PYPL stock?`;
    case 8:
      return `Etsy Inc. (ETSY) Shares increased a 302% during 2020. What would you do with your ETSY stock?`;
    case 9:
      return `On April 9 2021, Intel Corp. Shares peaked at $68.29 marking a 8.30% increase from the previous year. However, Intel's share historical peak price was $70.56 on August 18 2000. What would you do with your INTC stock?`;
    case 10:
      return `q10`;
    // case 11:
    //   return `q11`;
    // case 12:
    //   return `q12`;
    // case 13:
    //   return `q13`;
    // case 14:
    //   return `q14`;
    // case 15:
    //   return `q15`;
    // case 16:
    //   return `q16`;
    // case 17:
    //   return `q17`;
    // case 18:
    //   return `q18`;
    // case 19:
    //   return `q19`;
    // case 20:
    //   return `q20`;
    default:
      return "Unknown step";
  }
}

export default function VerticalLinearStepper(props) {

  const [test, setTest] = React.useState('');
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div
      className={classes.root}
      style={{ maxWidth: 450, overflowY: "scroll", maxHeight: 600 }}
    >
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  {activeStep === 4 ? (
                    <div>
                      {" "}
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "#35baf6" }}
                        onClick={(e) => {
                          handleNext();
                          saveQuizInfo(e);
                        }}
                        className={classes.button}
                        data-value="short_term"
                        data-step={activeStep}
                      >
                        Short Term
                      </Button>
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "#35baf6" }}
                        onClick={(e) => {
                          handleNext();
                          saveQuizInfo(e);
                        }}
                        className={classes.button}
                        data-value="long_term"
                        data-step={activeStep}
                      >
                        Long Term
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "#ffc107" }}
                        onClick={(e) => {
                          handleNext();
                          saveQuizInfo(e);
                        }}
                        className={classes.button}
                        data-value="buy"
                        data-step={activeStep}
                      >
                        Buy More
                      </Button>
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "#4caf50" }}
                        onClick={(e) => {
                          handleNext();
                          saveQuizInfo(e);
                        }}
                        className={classes.button}
                        data-value="sell"
                        data-step={activeStep}
                      >
                        Sell All
                      </Button>
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "#35baf6" }}
                        onClick={(e) => {
                          handleNext();
                          saveQuizInfo(e);
                        }}
                        className={classes.button}
                        data-value="hold"
                        data-step={activeStep}
                      >
                        Hold
                      </Button>
                    </div>
                  )}

                  <br />
                  <Button onClick={props.end} className={classes.button}>
                    Close
                  </Button>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                  <br />
                  {/* {|| activeStep === 9 || activeStep === 14} */}
                  {activeStep === 5 ? (
                    <Button
                      onClick={() => {
                        props.end();
                        // sendQuizInfo();
                        props.testing2(array_of_responses)
                        props.testing(array_of_responses);
                      }}
                      className={classes.button}
                      variant="contained"
                      style={{ backgroundColor: "#cca3e3" }}
                    >
                      Save
                    </Button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
          <Button
            onClick={() => {
              props.end();
              // sendQuizInfo();
            }}
            className={classes.button}
          >
            Save
          </Button>
        </Paper>
      )}
    </div>
  );
}
