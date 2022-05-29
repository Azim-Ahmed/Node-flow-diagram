import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DynInputHandle from "../Handler/DynInputHandle";
const CustomInputNode = ({ data }, props) => {
  const [outputcount, setOutputCount] = useState(1);

  return (
    <>
      <div className=" hover:border-green-500 rounded-md shadow-xl">
        {data.label}
        <hr />
        <div className="text sm fill-purple-700 hover:fill-green-500 mb-3 ">
          <AddIcon onClick={() => setOutputCount((i) => i + 1)} />
        </div>
      </div>
      <div>
        {Array(outputcount)
          .fill(null)
          .map((_, i) => (
            <DynInputHandle key={i} idx={i} />
          ))}
      </div>
    </>
  );
};
export default CustomInputNode;
