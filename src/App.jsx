import { useState, useEffect } from "react";
import "./App.css";
import Question from "../components/question.jsx";
import { decode } from "html-entities";
import { nanoid } from "nanoid";

function App() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

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

  function handleButtonClick(e) {
    setSelected(() => !false);
  }

  let els = questions.map((obj) => {
    return (
      <Question
        key={nanoid()}
        question={decode(obj.question)}
        correct={decode(obj.correct_answer)}
        incorrect={decode(obj.incorrect_answers)}
        buttonClick={handleButtonClick}
      />
    );
  });

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {els}
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
