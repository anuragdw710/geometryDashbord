// src/App.js
import React, { useState } from "react";
import GraphInput from "./components/GraphInput";
import GraphComponent from "./components/GraphComponent";
import "./App.css";
function App() {
  const [graphData, setGraphData] = useState(null);

  const handleGraphSubmit = (data) => {
    setGraphData(data);
  };

  return (
    <div className="App">
      <h1 className="main-heading">Graph Drawing App</h1>
      <div className="dashboard">
        <GraphInput onSubmit={handleGraphSubmit} />
        {graphData && <GraphComponent graphData={graphData} />}
      </div>
    </div>
  );
}

export default App;
