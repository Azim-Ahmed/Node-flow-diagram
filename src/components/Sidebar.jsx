import "../index";
import { useState } from "react";
import FilterItems from "./FlowComponents/FilterItems";
import { Box } from "@mui/system";
import { Divider, Tooltip } from "@mui/material";
import { flowData } from "../assets/FlowData";

const Sidebar = () => {
  const onDragStart = (event, nodeType, label, color) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.setData("application/reactflow/label", label);
    event.dataTransfer.setData("application/reactflow/color", color);
    event.dataTransfer.effectAllowed = "move";
  };
  const menuItems = [...new Set(flowData.map((val) => val.type))];
  const [item, setItem] = useState(flowData);
  const filterItem = (curcat) => {
    const newItem = flowData.filter((newVal) => {
      return newVal.type === curcat;
    });
    setItem(newItem);
  };

  return (
    <Box className="static">
      <Box textAlign={`center`} margin="8px 2px">
        <h5>Click to filter your node types</h5>
        <Divider />
      </Box>

      <FilterItems
        filterItem={filterItem}
        setItem={setItem}
        menuItems={menuItems}
      />
      <Divider />
      <Box
        mt={2}
        display="flex"
        justifyContent={`center`}
        flexDirection="column"
        alignItems={`center`}
      >
        {item.map((object, key) => (
          <Tooltip key={key} title={object?.title} placement="right" arrow>
            <Box
              draggable
              className={object.style}
              onDragStart={(event) =>
                onDragStart(event, object.type, object.text, object.color)
              }
            >
              <Box key={key} className="text-center">
                {object.text}
              </Box>
            </Box>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
};
export default Sidebar;
