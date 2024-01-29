import React, { useState } from "react";
import { generateThoughtId, getExpirationTime } from "../helper";
import "../../App.css";

export const EnterThoughts = ({ AddThought }) => {
  const [inputThought, setInputThought] = useState("");

  const handleTermChange = ({ target }) => {
    setInputThought(target.value);
  };

  const handleAddThought = (e) => {
    AddThought({
      id: generateThoughtId(),
      title: inputThought,
      expireAt: getExpirationTime(),
    });
    setInputThought("");
  };
  return (
    <div className="input-group mb-3">
      <input
        type={"text"}
        className="form-control"
        placeholder={"Type right away ..."}
        onChange={handleTermChange}
        value={inputThought}
      />
      <button className="btn btn-dark" onClick={handleAddThought}>
        Add
      </button>
    </div>
  );
};
