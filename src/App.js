import React, { useState } from "react";
import "./App.css";
import { EnterThoughts } from "./components/Thoughts/EnterThoughts";
import { Thoughts } from "./components/Thoughts/Thoughts";

export default function App() {
  const [thoughts, setThoughts] = useState([]);

  const AddThought = (thought) => {
    const title = thought.title;

    // check empty thought
    if (!title) {
      return;
    }

    setThoughts((prev) => {
      return [thought, ...prev];
    });
  };

  const removeThought = (id) => {
    setThoughts(thoughts.filter((thought) => thought.id !== id));
  };

  return (
    <>
      <div className="mb-4 text-center heading-container-text">
        <h1>Thought Drift...💭</h1>
        <h3>Clear up your mental fog</h3>
        <h5>Each thought vanishes after 10 seconds of adding</h5>
        <EnterThoughts AddThought={AddThought} />
      </div>

      <Thoughts thoughts={thoughts} removeThought={removeThought} />

      <div className="footer">
        <p>
          JAY OSWAL | View source code on{" "}
          <a
            href="https://github.com/jayoswal/Thought_Drift_React_JS_App"
            target="_blank"
          >
            GitHub
          </a>
        </p>
      </div>
    </>
  );
}
