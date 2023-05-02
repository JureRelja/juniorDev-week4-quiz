import { useState } from "react";
import axios from "axios";
import Questions from "./Components/Questions.jsx";
import GetQuestions from "./Components/GetQuestions.jsx";

import "./App.css";

function App() {
  const [questions, setQuestions] = useState({});
  const [score, setScore] = useState(0);

  const getQuestions = (numberOfQuestions, category, difficulty) => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}`
      )
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app">
      <h1>Quiz App</h1>
      <div className="container">
        {questions.results ? (
          <Questions
            questions={questions}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        ) : (
          <GetQuestions getQuestions={getQuestions} />
        )}
      </div>
      {questions.results && (
        <h2>
          Score: {score}/{questions.results.length}
        </h2>
      )}
    </div>
  );
}

export default App;
