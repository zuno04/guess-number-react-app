import { useState } from "react";

import "./Party.css";

const Party = ({ dispatch, number, lower, upper, gameStatus }) => {
  const [guess, setGuess] = useState(null);
  const [victory, setVictory] = useState(false);

  const guessNumber = () => {
    if (victory) {
      setGuess(null);
      setVictory(false);

      dispatch({
        type: "NEW_GAME"
      });
    } else {
      const userInput = parseInt(
        document.getElementById("userInput").value,
        10
      );

      if (!isNaN(userInput)) {
        setGuess(userInput);

        if (userInput > number) {
          dispatch({
            type: "SET_GAME_STATUS",
            payload: { gameStatus: "Nope. Lower" }
          });
        } else if (userInput < number) {
          dispatch({
            type: "SET_GAME_STATUS",
            payload: { gameStatus: "Nope. Higher" }
          });
        } else {
          setVictory(true);

          dispatch({
            type: "SET_GAME_STATUS",
            payload: { gameStatus: "You got it!" }
          });
        }
      } else {
        dispatch({
          type: "SET_GAME_STATUS",
          payload: { gameStatus: "Not a valid number!" }
        });
      }
    }
  };

  return (
    <div>
      <header>
        <nav className="nav">
          <h1>
            Guess the number between {lower} and {upper}
          </h1>
        </nav>
      </header>

      <div className="content">
        <div className="display-section">
          <p>Last guess: {guess ? guess : "none"}</p>
          <div className="status">{gameStatus}</div>
        </div>
        <div className="input-group">
          <label htmlFor="guess">Guess: </label>
          <input className="input" id="userInput" type="text" name="guess" />
          <button
            className="btn btn-prime"
            name="attempt"
            onClick={guessNumber}
          >
            {victory ? "New Game" : "Make guess"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Party;
