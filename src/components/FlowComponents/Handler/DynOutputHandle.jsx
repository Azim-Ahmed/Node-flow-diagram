import { Handle, Position } from "react-flow-renderer";

const DynOutputHandle = (props) => {
  const { idx } = props;
  return (
    <Handle
      type={"target"}
      id={`output${idx}`}
      position={Position.Up}
      style={{ left: 10 + idx * 20, height: "10px", width: "10px" }}
    />
  );
};
export default DynOutputHandle;
