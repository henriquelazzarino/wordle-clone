import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

const Letter = ({ letterPosition, attemptVal }) => {
  const { board, correctWord, currAttempt, setDisabledLetters, disabledLetters } = useContext(AppContext);
  const letter = board[attemptVal][letterPosition];

  const correct = correctWord.toUpperCase()[letterPosition] === letter;
  const almost = !correct && letter !== "" && correctWord.includes(letter);

  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

    useEffect(() => {
      if (letter !== "" && !correct && !almost) {
        setDisabledLetters((prev) => [...prev, letter])
      }
    }, [currAttempt.attempt])
    
  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
};

export default Letter;
