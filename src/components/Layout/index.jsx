import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DataObjectIcon from "@mui/icons-material/DataObject";
import { saveCanvas, toJSON } from "../../helpers";
import { Tooltip } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Mpopover from "../ReUsable/Mpopover";
import ConvertData from "../FlowComponents/ConverData";
const Layout = ({
  flowImageDownloadRef,
  children,
  downloadJSON,
  jsonInput,
  setJsonInput,
  convert,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const renderPopover = () => {
    return (
      <Mpopover
        // className={}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        id={id}
      >
        <ConvertData
          jsonInput={jsonInput}
          setJsonInput={setJsonInput}
          convert={convert}
        />
      </Mpopover>
    );
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {open && renderPopover()}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Node Flow Diagram
          </Typography>
          <Box mr="8px">
            <Tooltip
              title={`Download as an Image/png`}
              placement="bottom"
              arrow
            >
              <Button
                variant="outlined"
                onClick={() => saveCanvas(flowImageDownloadRef)}
                color="inherit"
              >
                <FileDownloadIcon />
              </Button>
            </Tooltip>
          </Box>
          <Box mr="8px">
            <Tooltip title={`Download as json`} placement="bottom" arrow>
              <Button
                variant="outlined"
                onClick={() => toJSON(downloadJSON)}
                color="inherit"
              >
                <DataObjectIcon />
              </Button>
            </Tooltip>
          </Box>
          <Box mr="8px">
            <Tooltip
              title={`Paste your json to draw the diagram`}
              placement="bottom"
              arrow
            >
              <Button variant="outlined" onClick={handleClick} color="inherit">
                <CloudUploadIcon />
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};
export default Layout;
