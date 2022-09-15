import { randInt } from "../utils/random";

export const reducer = (state, action) => {
  const new_number = randInt(state.lower, state.upper);

  switch (action.type) {
    case "SET_CONFIG":
      return {
        ...state,
        gameStatus: "",
        number: new_number,
        lower: action.payload.lower,
        upper: action.payload.upper
      };
    case "SET_GAME_STATUS":
      return {
        ...state,
        gameStatus: action.payload.gameStatus
      };

    default:
      return {
        ...state,
        gameStatus: "",
        number: new_number
      };
  }
};
