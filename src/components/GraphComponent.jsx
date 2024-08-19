// src/components/GraphComponent.js
import React, { useEffect, useRef } from "react";
import { Network } from "vis-network";

const GraphComponent = ({ graphData }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const { edges } = graphData;

    const nodes = new Set();

    edges.forEach((edge) => {
      nodes.add(edge.from);
      nodes.add(edge.to);
    });

    const networkData = {
      nodes: Array.from(nodes).map((id) => ({ id, label: `Node ${id}` })),
      edges: edges.map((edge) => ({
        from: edge.from,
        to: edge.to,
      })),
    };

    const options = {
      autoResize: true,
      height: "500px",
      width: "100%",
      nodes: {
        shape: "dot",
        size: 20,
        color: "#00aaff",
        font: {
          size: 20,
          color: "#000000",
        },
      },
      edges: {
        color: "#000000",
        smooth: true,
      },
      physics: {
        enabled: true,
      },
      interaction: {
        dragNodes: true,
        dragView: true,
        zoomView: true,
      },
    };

    const network = new Network(containerRef.current, networkData, options);

    return () => {
      network.destroy();
    };
  }, [graphData]);

  return <div ref={containerRef} style={{ border: "1px solid black" }} />;
};

export default GraphComponent;
