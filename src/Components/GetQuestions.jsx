import React from "react";
import { useState } from "react";
import "./GetQuestions.css";

function GetQuestions(props) {
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  const [category, setCategory] = useState(9);
  const [difficulty, setDifficulty] = useState("easy");

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const difficultyHandler = (e) => {
    setDifficulty(e.target.value);
  };

  const numberHandler = (e) => {
    if (e.target.value < 16 && e.target.value > 0) {
      setNumberOfQuestions(e.target.value);
    }
  };

  return (
    <div className="input-form">
      <h2>Generate questions</h2>
      <div className="input-form-field">
        <label>Number of questions</label>
        <input
          type="number"
          value={numberOfQuestions}
          onChange={numberHandler}
          min="1"
          max="15"
          placeholder="1-15"
        />
      </div>
      <div className="input-form-field">
        <label>Category</label>
        <select onChange={categoryHandler}>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals & Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science & Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime & Manga</option>
          <option value="32">Entertainment: Cartoon & Animations</option>
        </select>
      </div>
      <div className="input-form-field">
        <label>Difficulty</label>
        <select onChange={difficultyHandler}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <button
        className="button"
        onClick={() =>
          props.getQuestions(numberOfQuestions, category, difficulty)
        }
      >
        Get questions
      </button>
    </div>
  );
}

export default GetQuestions;
