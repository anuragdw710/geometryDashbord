// src/components/GraphInput.js
import React, { useState } from "react";

const GraphInput = ({ onSubmit }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setError(""); // Reset error on input change
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const lines = input.trim().split("\n");
    const [n, m] = lines[0].split(" ").map(Number);

    if (isNaN(n) || isNaN(m)) {
      setError("Invalid number of nodes or edges.");
      return;
    }

    const edges = [];

    for (let i = 1; i <= m; i++) {
      const [u, v] = lines[i].split(" ").map(Number);
      if (isNaN(u) || isNaN(v) || u > n || v > n) {
        setError(`Invalid edge at line ${i + 1}.`);
        return;
      }
      edges.push({ from: u, to: v });
    }

    onSubmit({ n, m, edges });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <textarea
        rows="10"
        cols="30"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter graph data here"
      />
      <br />
      <button type="submit">Draw Graph</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </form>
  );
};

export default GraphInput;
