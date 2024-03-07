import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Buttons from "./buttons";

const Question = (props) => {
  //selected answer state
  const [selectedAnswer, setSelectedAnswer] = useState("");

  function handleAnswerSelection(answer) {
    setSelectedAnswer(answer);
    console.log(selectedAnswer);
  }

  const buttons = (
    <Buttons
      answers={props.shuffledAnswers}
      selectedAnswer={selectedAnswer}
      setAnswer={handleAnswerSelection}
    />
  );

  //Detect somethings been selected
  //re-render, with the selected question active

  return (
    <div className="question-container">
      <h2>{props.question}</h2>
      <div className="answers-container">{buttons}</div>
    </div>
  );
};
export default Question;

// //Setting up for shuffled
// const answers = [props.correct];
// props.incorrect.forEach((i) => answers.push(i));

// //Shuffling
// const shuffled = answers
//   .map((value) => ({ value, sort: Math.random() }))
//   .sort((a, b) => a.sort - b.sort)
//   .map(({ value }) => value);
