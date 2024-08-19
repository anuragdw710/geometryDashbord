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
    if (lines.length != m + 1) {
      setError("Invalid number of edges.");
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
    <form onSubmit={handleFormSubmit} className="form-box">
      <textarea
        rows="10"
        cols="30"
        className="textarea"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter graph data here as
n m
u1 v1
u2 v2
u3 v3 
u4 v4
..."
      />
      <button type="submit" className="button">
        Draw Graph
      </button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </form>
  );
};

export default GraphInput;
