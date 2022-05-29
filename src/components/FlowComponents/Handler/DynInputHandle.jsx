import { Handle, Position } from "react-flow-renderer";
const DynInputHandle = (props) => {
  const { idx } = props;
  return (
    <Handle
      type={"source"}
      id={`source${idx}`}
      position={Position.Bottom}
      style={{ left: 10 + idx * 20, height: "10px", width: "10px" }}
    />
  );
};
export default DynInputHandle;
