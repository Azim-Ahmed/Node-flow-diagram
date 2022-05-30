import React from "react";
import { Handle } from "react-flow-renderer";
import "./index.css";

const DecisionNode = ({ data }) => {
  return (
    <div className="decisionNode">
      <Handle
        type="target"
        position="left"
        id="decision_a"
        style={{
          background: "#295b88",
          position: "relative",
          top: "80px",
          zIndex: "2",
          left: "-3px",
          fontSize: "10px",
          padding: "3px",
        }}
      />

      <p
        style={{
          position: "absolute",
          color: "black",
          zIndex: "2",
          fontSize: "16px",
          wordWrap: "normal",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: "rotate(-45deg)",
          textAlign: "center",
          fontWeight: "500",
          //   whiteSpace: "nowrap",
          marginLeft: "10px",
          marginTop: "20px",
          // width: "80px",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {data.label}
      </p>
      <Handle
        type="source"
        position="right"
        id="decision_b"
        style={{
          zIndex: "2",
          top: 0,
          right: 0,
          background: "#101921",
          padding: "3px",
          transform: "rotate(-45deg)",
          content: "data",
        }}
      />
    </div>
  );
};
export default DecisionNode;
