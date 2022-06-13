import React from "react";
import { Handle } from "react-flow-renderer";

const CircleNode = ({ data }) => {
  return (
    <div className="">
      <Handle
        type="target"
        position="left"
        id="decision_a"
        style={{
          background: "black",
          position: "relative",
          top: "0",
          zIndex: "2",
          left: "35px",
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
          textAlign: "center",
          fontWeight: "500",
          marginLeft: "10px",
          marginTop: "20px",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {data?.label}
      </p>
      <Handle
        type="source"
        position="right"
        id="decision_b"
        style={{
          background: "black",
          position: "relative",
          bottom: "-70px",
          zIndex: "2",
          left: "35px",
          fontSize: "10px",
          padding: "3px",
        }}
      />
    </div>
  );
};
export default CircleNode;
