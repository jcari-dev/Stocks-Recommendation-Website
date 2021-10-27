import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Quiz from "./Quiz";
import Quizv2 from "./Quizv2";
import Container from "./Container";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function SimpleBackdrop(props) {
  const [quizContent, setquizContent] = useState("");
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    console.log(open);
  };

  function readQuiz(array_prop) {
    fetch("http://127.0.0.1:8000/send-results-short/")
      .then((results) => results.json())
      .then((data) => {
        console.log(data);
        fetch(
          `https://financialmodelingprep.com/api/v3/profile/${data[0].Companies_Short_Term}?apikey=`
        )
          .then((results) => results.json())
          .then((data2) => {

            let array_of_companies = []
            console.log(data2);
            for (let x = 0; x < data2.length; x++) {
              array_of_companies.push(`<img src="${data2[x].image}"/>`)
            }
            console.log(array_of_companies)
            let term = ['Short']
            term.push(data2)
            // console.log(term, 'HEREEERERERERERE')
            setquizContent(term)
            
          });
      });
  }
  function readQuiz2(array_prop) {
    fetch("http://127.0.0.1:8000/send-results/")
      .then((results) => results.json())
      .then((data) => {
        console.log(data);
        fetch(
          `https://financialmodelingprep.com/api/v3/profile/${data[0].Companies_Long_Term}?apiKey=`
        )
          .then((results) => results.json())
          .then((data2) => {
            let array_of_companies = []
            console.log(data2);
            for (let x = 0; x < data2.length; x++) {
              array_of_companies.push(`<img src="${data2[x].image}"/>`)
            }
            console.log(array_of_companies)
            let term = ['Long']
            term.push(data2)
            // console.log(term, 'HEREEERERERERERE')
            setquizContent(term)
            
            // setquizContent(data[0].Error);
          });
      });
  }
  function sendQuizInfo(array_prop) {
    console.log(array_prop);
    if (array_prop[4].includes("long_term")) {
      fetch("http://127.0.0.1:8000/send-results/", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          // "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify({
          q_array: array_prop,
        }),
      });
      readQuiz2(array_prop);
    } else {
      fetch("http://127.0.0.1:8000/send-results/", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          // "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify({
          q_array: array_prop,
        }),
      });
      readQuiz(array_prop);
    }
    return console.log("q_array sent.");
  }

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleToggle}>
        Take Quiz
      </Button>
      <Backdrop className={classes.backdrop} open={open}>
        {/* <Quiz end={handleClose}/> */}
        <Quizv2 end={handleClose} testing={sendQuizInfo} testing2={readQuiz} />
      </Backdrop>
      <Container test={quizContent} />
    </div>
  );
}
