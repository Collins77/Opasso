import React from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import {
  AiOutlineDelete,
} from "react-icons/ai";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { TbHandStop } from "react-icons/tb";

const ActionsCell = ({ row, handleDelete, handleApprove, handleReject, handleOnHold }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick}>
      <MoreVertIcon />
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleDelete(row.id)}>
          <AiOutlineDelete size={15} />
          Delete
        </MenuItem>
        {row.status !== "Approved" && (
          <MenuItem onClick={() => handleApprove(row.id)}>
            <TiTick size={15} color="green" style={{ borderRadius: "50%" }} />
            Approve
          </MenuItem>
        )}
        {row.status !== "Rejected" && (
          <MenuItem onClick={() => handleReject(row.id)}>
            <RxCross2 size={15} color="red" style={{ borderRadius: "50%" }} />
            Reject
          </MenuItem>
        )}
        {row.status !== "On Hold" && (
          <MenuItem onClick={() => handleOnHold(row.id)}>
            <TbHandStop size={15} color="blue" style={{ borderRadius: "50%" }} />
            On Hold
          </MenuItem>
        )}
      </Menu>
    </>
  );
};

export default ActionsCell;
