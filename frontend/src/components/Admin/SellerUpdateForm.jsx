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
