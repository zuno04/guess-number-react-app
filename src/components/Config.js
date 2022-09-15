import { useState } from "react";

import "./Config.css";

const Config = ({ lower, upper, dispatch }) => {
  const [newConfig, setNewConfig] = useState({ lower, upper });

  const setConfig = () => {
    dispatch({
      type: "SET_CONFIG",
      payload: { ...newConfig }
    });
  };

  return (
    <div className="setting-bloc">
      <h1>Game Configs</h1>

      <div className="lower">
        <label htmlFor="lower">Lower bound: </label>
        <input
          className="input-conf"
          type="number"
          name="lower"
          value={newConfig.lower}
          onChange={(e) =>
            setNewConfig({ ...newConfig, lower: e.target.value })
          }
        ></input>
      </div>
      <div className="upper">
        <label htmlFor="upper">Upper bound: </label>
        <input
          className="input-conf"
          type="number"
          name="upper"
          value={newConfig.upper}
          onChange={(e) =>
            setNewConfig({ ...newConfig, upper: e.target.value })
          }
        />
      </div>
      <button className="btn btn-reset" name="reset" onClick={setConfig}>
        Reset
      </button>
    </div>
  );
};

export default Config;
