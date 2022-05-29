import React from "react";
import { flowData } from "../../assets/FlowData";
import { Button, Box } from "@mui/material";
const FilterItems = ({ setItem, menuItems, filterItem }) => {
  return (
    <>
      <Box
        display="flex"
        justifyContent={`center`}
        flexDirection="column"
        alignItems={`center`}
        mb={2}
      >
        {menuItems.map((Val, id) => {
          return (
            <Box
              key={id}
              display="flex"
              justifyContent={`center`}
              flexDirection="column"
              alignItems={`center`}
              mb={1}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={() => filterItem(Val)}
              >
                {Val}
              </Button>
            </Box>
          );
        })}
        <Button
          variant="contained"
          color="info"
          onClick={() => setItem(flowData)}
        >
          All
        </Button>
      </Box>
    </>
  );
};

export default FilterItems;
