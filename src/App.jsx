// src/App.js
import React, { useState } from "react";
import GraphInput from "./components/GraphInput";
import GraphComponent from "./components/GraphComponent";

function App() {
  const [graphData, setGraphData] = useState(null);

  const handleGraphSubmit = (data) => {
    setGraphData(data);
  };

  return (
    <div className="App">
      <h1>Graph Drawing App</h1>
      <GraphInput onSubmit={handleGraphSubmit} />
      {graphData && <GraphComponent graphData={graphData} />}
    </div>
  );
}

export default App;
