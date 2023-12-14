import React, { useState } from "react";
import { Button, Menu, MenuItem, Modal, CircularProgress } from "@material-ui/core";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ProdUpdateForm from "./ProdUpdateForm"; // Import your product update form
import axios from "axios";
// import { server } from "../../server";
import { toast } from "react-toastify";
import { server } from "../../../server";

const ProductActionCell = ({ row, handleDelete }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUpdateProduct = async (productId, updatedData) => {
    try {
      setIsUpdating(true);

      // Make an HTTP request to update the product data
      const response = await axios.put(
        `${server}/product/update-product/${productId}`,
        updatedData
      );

      // Check if the update was successful (you may need to adjust based on your API response)
      if (response.data.success) {
        toast.success("Product updated successfully!", response.data.product);
        // console.log("Product updated successfully:", response.data.product);
      } else {
        toast.error("Error updating product", response.data.message);
        console.error("Failed to update product:", response.data.message);
      }
    } catch (error) {
      // Handle any errors that occur during the HTTP request
      console.error("Error updating product:", error.message);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleUpdateClick = () => {
    setUpdateModalOpen(true);
    handleClose();
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
        <MenuItem onClick={() => handleDelete(row.id)}>
          Delete 
        </MenuItem>
        <MenuItem onClick={handleUpdateClick}>
          Update 
        </MenuItem>
      </Menu>
      {/* Update Product Modal */}
      <Modal
        open={isUpdateModalOpen}
        onClose={handleUpdateClose}
        aria-labelledby="update-product-modal"
        aria-describedby="update-product-modal-description"
      >
        <div>
          {isUpdating ? (
            <CircularProgress />
          ) : (
            <ProdUpdateForm
              product={row}
              handleUpdateProduct={handleUpdateProduct}
            />
          )}
        </div>
      </Modal>
    </>
  );
};

export default ProductActionCell;
