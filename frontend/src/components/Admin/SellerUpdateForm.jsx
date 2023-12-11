import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

const SellerUpdateForm = ({ seller, handleUpdateSeller }) => {
  const [updatedData, setUpdatedData] = useState({
    name: seller.name,
    email: seller.email,
    address: seller.address,
    category: seller.category,
    phoneNumber: seller.phoneNumber,

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // Call the handleUpdateSeller function with the updated data
    handleUpdateSeller(updatedData);
  };

  return (
    <form onSubmit={handleUpdate}>
      <TextField
        label="Name"
        name="name"
        value={updatedData.name}
        onChange={handleChange}
      />
      <TextField
        label=""
        name="name"
        value={updatedData.email}
        onChange={handleChange}
      />
      <TextField
        label="Name"
        name="name"
        value={updatedData.address}
        onChange={handleChange}
      />
      <TextField
        label="Name"
        name="name"
        value={updatedData.phoneNumber}
        onChange={handleChange}
      />
      {/* Add other form fields as needed */}
      <Button type="submit">Update Seller</Button>
    </form>
  );
};

export default SellerUpdateForm;
