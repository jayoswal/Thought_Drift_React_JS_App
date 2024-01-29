import React, { useEffect } from "react";
import "../../App.css";

const Thought = ({ thought, removeThought }) => {
  useEffect(() => {
    const timeRemaining = thought.expireAt - Date.now();
    const timeout = setTimeout(() => {
      removeThought(thought.id);
    }, timeRemaining);
    return () => {
      clearTimeout(timeout);
    };
  }, [removeThought]);
  return (
    <div className="card-body" key={thought.id}>
      <h6 className="card-text">{thought.title}</h6>
    </div>
  );
};

export const Thoughts = ({ thoughts, removeThought }) => {
  return (
    <div className="card mb-4 card-container">
      {thoughts.map((thought) => (
        <Thought
          thought={thought}
          removeThought={removeThought}
          key={thought.id}
        />
      ))}
    </div>
  );
};
