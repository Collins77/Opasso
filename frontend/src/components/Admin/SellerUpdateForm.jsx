import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

const SellerUpdateForm = ({ seller, handleUpdate }) => {
  const [updatedData, setUpdatedData] = useState({
    name: seller.name,
    // Add other fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = (sellerId) => {
    // Logic to handle the update operation for the seller with ID: sellerId
    console.log(`Update account for seller with ID: ${sellerId}`);
    // Add your modal display logic here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the handleUpdate function with the updated data
    handleUpdate(updatedData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="name"
        value={updatedData.name}
        onChange={handleChange}
      />
      {/* Add other form fields as needed */}
      <Button type="submit">Update Seller</Button>
    </form>
  );
};

export default SellerUpdateForm;
