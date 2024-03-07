import React, { useState } from "react";
import { nanoid } from "nanoid";

const Buttons = (props) => {
  //set a button selected state

  function handleClick(el) {
    props.setAnswer(el);
  }

  return (
    <div className="answers-container">
      {props.answers.map((answer) => {
        return (
          <button
            key={nanoid()}
            className={
              props.selectedAnswer === answer
                ? "selected-answer"
                : "unselected-answer"
            }
            onClick={() => handleClick(answer)}
          >
            {answer}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
``;
