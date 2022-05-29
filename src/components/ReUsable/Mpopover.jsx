import Popover from "@mui/material/Popover";
/**
 *@function MPopover.jsx
 *@author Azim
 *
 **/

const Mpopover = ({
  className,
  children,
  open,
  anchorEl,
  onClose,
  id,
  horigin,
}) => {
  return (
    <Popover
      id={id}
      open={open}
      className={className}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "center",
        horizontal: horigin ?? "center",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
    >
      {children}
    </Popover>
  );
};

export default Mpopover;
