import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DynOutputHandle from "../Handler/DynOutputHandle";
const CustomOutputNode = ({ data }, props) => {
  const [outputcount, setOutputCount] = useState(1);

  return (
    <>
      <div className="py-1 hover:border-green-500 rounded-md">
        <div>
          {Array(outputcount)
            .fill(null)
            .map((_, i) => (
              <DynOutputHandle key={i} idx={i} />
            ))}
        </div>

        <div className="text sm fill-purple-700 hover:fill-green-500 my-1">
          <AddIcon onClick={() => setOutputCount((i) => i + 1)} />
        </div>
        <hr />
        {data.label}
      </div>
    </>
  );
};
export default CustomOutputNode;
