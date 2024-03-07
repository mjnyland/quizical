import { useState, useEffect } from "react";
import "./App.css";
import Question from "../components/question.jsx";
import { decode } from "html-entities";
import { nanoid } from "nanoid";

function App() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selections, setSelections] = useState([]);

  useEffect(() => {
    console.log("about to fetch");
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setQuestions(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function shuffleAnswers(arr, i) {
    //Setting up for shuffled
    const answers = [];

    arr.forEach((answer) => {
      answers.push(answer);
    });

    answers.push(i);

    const shuffled = answers
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return shuffled;
  }

  function handleSubmit() {
    console.log("firing");
  }

  let els = questions.map((obj) => {
    return (
      <Question
        key={nanoid()}
        question={decode(obj.question)}
        correctAnswer={obj.correctAnswer}
        addSelection={setSelections}
        shuffledAnswers={shuffleAnswers(
          decode(obj.incorrect_answers),
          decode(obj.correct_answer)
        )}
      />
    );
  });

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {els}
      <button onClick={() => handleSubmit()} className="submit-button">
        Submit
      </button>
    </div>
  );
}

export default App;

//fetch some data from an API
//question component
//store 5 of those questions and answers in an array of objects
//map over the array to render them
//save a selected answer and display it when selected
//run a function when I check answers
