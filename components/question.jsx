import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Button from "./button";

const Question = (props) => {
  //selected answer state
  const [selectedAnswer, setSelectedAnswer] = useState("");

  function handleAnswerSelection(answer) {
    setSelectedAnswer(answer);
    console.log(selectedAnswer);
  }

  //Setting up for shuffled
  const questions = [props.correct];
  props.incorrect.forEach((i) => questions.push(i));

  //Shuffling
  const shuffled = questions
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  const buttons = (
    <Button
      answers={questions}
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
