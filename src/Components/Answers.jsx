import React from "react";
import "./Answers.css";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  width: 100%;
  background-color: ${(props) => props.color};
  color: #000;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  transition: ease-in-out 0.2s;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function Answers(props) {
  const correctAnswer = props.question.correct_answer;
  const [answered, setAnswered] = useState(false);
  const [validAnswer, setValidAnswer] = useState(false);
  const [entered, setEntered] = useState("");
  const [allAnswers, setAllAnswers] = useState([]);

  const questionAnswers = (question) => {
    if (question.type === "boolean") {
      setAllAnswers(["True", "False"]);
    } else {
      const answers = [...question.incorrect_answers, question.correct_answer];
      setAllAnswers(answers.sort(() => Math.random() - 0.5));
    }
  };

  //Scrambling answers
  useEffect(() => {
    questionAnswers(props.question);
  }, [props.question]);

  //Checking if the answer is correct
  const checkAnswer = (e) => {
    setAnswered(true);
    if (e.target.innerText === correctAnswer) {
      setEntered(e.target.innerText);
      setValidAnswer(true);
      props.setScore((prevScore) => prevScore + 1);
    } else {
      setEntered(e.target.innerText);
    }
  };

  // Transition to next question
  useEffect(() => {
    const timer = setTimeout(() => {
      if (answered) {
        props.incrementIndex();
        setAnswered(false);
        setValidAnswer(false);
        setEntered();
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, [answered]);

  //Adding color to the buttons
  const checkColor = (validAnswer) => {
    if (validAnswer == true) {
      return "#00ff00";
    } else if (validAnswer == false) {
      return "#ff0000";
    }
  };

  const showCorrectAnswer = (answer) => {
    if (answer == correctAnswer && answered) {
      return "#00ff00";
    } else {
      return "#fff";
    }
  };

  return (
    <div className="answers">
      {allAnswers.map((answer) => (
        <Button
          onClick={checkAnswer}
          disabled={answered}
          color={
            entered == answer
              ? checkColor(validAnswer)
              : showCorrectAnswer(answer)
          }
          key={answer}
        >
          {answer}
        </Button>
      ))}
    </div>
  );
}

export default Answers;
