import React from "react";
import { useState } from "react";
import Answers from "./Answers.jsx";
import "./Questions.css";

function Questions(props) {
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  const incrementIndex = () => {
    if (index < props.questions.results.length - 1) {
      setIndex(index + 1);
    } else if (index == props.questions.results.length - 1) {
      setFinished(true);
      return 0;
    }
  };

  const restart = () => {
    props.setQuestions({});
    props.setScore(0);
    setFinished(false);
    setIndex(0);
  };

  return (
    <div className="question-container">
      {!finished ? (
        <div>
          <h2>
            Question: {index}/{props.questions.results.length}
          </h2>
          <h2>{props.questions.results[index].question}</h2>
          <Answers
            question={props.questions.results[index]}
            incrementIndex={incrementIndex}
            setScore={props.setScore}
            key={props.questions.results[index].question}
          />
        </div>
      ) : (
        <button onClick={restart} className="button">
          Back to start
        </button>
      )}
    </div>
  );
}

export default Questions;
