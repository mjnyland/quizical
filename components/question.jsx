import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Buttons from "./buttons";

const Question = (props) => {
  //selected answer state
  const [selectedAnswer, setSelectedAnswer] = useState(
    "default selected answer"
  );

  function handleAnswerSelection(string) {
    setSelectedAnswer(string);
    props.setSelections(string);
  }

  useEffect(() => {
    //console.log(selectedAnswer);
    props.addSelection(() => selectedAnswer);
  }, [selectedAnswer]);

  const buttons = props.question.map(() => {
    <Buttons
      answers={props.shuffledAnswers}
      selectedAnswer={selectedAnswer}
      setAnswer={handleAnswerSelection}
    />;
  });
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
