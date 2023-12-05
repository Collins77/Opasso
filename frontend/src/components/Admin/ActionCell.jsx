import React, { useState } from "react";
import { Button, Menu, MenuItem, Modal } from "@material-ui/core";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SellerUpdateForm from "./SellerUpdateForm";

const ActionsCell = ({ row, handleDelete, handleApprove, handleUpdate, handleReject, handleOnHold }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUpdateClick = () => {
    setUpdateModalOpen(true);
    handleClose(); // Close the menu when opening the modal
  };

  const handleUpdateClose = () => {
    setUpdateModalOpen(false);
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
        
        {row.status !== "Approved" && (
          <MenuItem onClick={() => handleApprove(row.id)}>
            {/* <TiTick size={15} color="green" style={{ borderRadius: "50%" }} /> */}
            Approve Account
          </MenuItem>
        )}
        {row.status !== "Rejected" && (
          <MenuItem onClick={() => handleReject(row.id)}>
            {/* <RxCross2 size={15} color="red" style={{ borderRadius: "50%" }} /> */}
            Reject Account
          </MenuItem>
        )}
        {row.status !== "On Hold" && (
          <MenuItem onClick={() => handleOnHold(row.id)}>
            {/* <TbHandStop size={15} color="blue" style={{ borderRadius: "50%" }} /> */}
            Hold Account
          </MenuItem>
        )}
        <MenuItem onClick={() => handleDelete(row.id)}>
          Delete Account
        </MenuItem>
        <MenuItem onClick={handleUpdateClick}>
          Update Account
        </MenuItem>
      </Menu>
      {/* Update Seller Modal */}
      <Modal
        open={isUpdateModalOpen}
        onClose={handleUpdateClose}
        aria-labelledby="update-seller-modal"
        aria-describedby="update-seller-modal-description"
      >
        <div>
          {/* Pass the seller data and an update function to the modal */}
          <SellerUpdateForm
            seller={row}
            handleUpdate={(updatedData) => {
              handleUpdate(row.id, updatedData);
              handleUpdateClose(); // Close the modal after updating
            }}
          />
        </div>
      </Modal>
    </>
  );
};

export default ActionsCell;
