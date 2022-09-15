import { useState } from "react";
import { Provider, Consumer } from "./store/GlobalState";

import { IoSettingsOutline } from "react-icons/io5";

import Party from "./components/Party";
import Config from "./components/Config";

import "./styles.css";

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <Provider>
      <Consumer>
        {(value) => {
          const { dispatch, number, lower, upper, gameStatus } = value;

          return (
            <div className="App">
              <Party
                dispatch={dispatch}
                number={number}
                lower={lower}
                upper={upper}
                gameStatus={gameStatus}
              />
            </div>
          );
        }}
      </Consumer>
      <div>
        <button
          className="config btn-conf"
          onClick={() => setVisible(!visible)}
        >
          <IoSettingsOutline /> <span>{visible ? "Hide" : "Show"} Config</span>
        </button>
      </div>
      <Consumer>
        {(value) => {
          const { dispatch, lower, upper } = value;

          return (
            <>
              {visible && (
                <Config dispatch={dispatch} lower={lower} upper={upper} />
              )}
            </>
          );
        }}
      </Consumer>
    </Provider>
  );
}
