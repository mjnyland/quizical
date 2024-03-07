import React, { useState } from "react";
import { nanoid } from "nanoid";

const Button = (props) => {
  //set a button selected state
  function handleButtonClick(answer) {
    props.setAnswer(answer);
  }

  //render all the buttons
  //return all buttons
  //load class name conditionally on click based on selected and the id

  return (
    <div className="answers-container">
      {props.answers.map((answer) => (
        <button
          key={nanoid()}
          className={
            props.selectedAnswer === answer
              ? "selected-answer"
              : "unselected-answer"
          }
          onClick={() => handleButtonClick(answer)}
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Button;
