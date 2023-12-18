import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { toast } from 'react-toastify';

const ProdUpdateForm = ({ product, handleUpdateProduct }) => {
  const [updatedData, setUpdatedData] = useState({
    name: '',
    description: '',
    partNumber: '',
    category: '',
    brand: '',
    warranty: '',
    discountPrice: '',
    isAvailable: '',
    stock: '',
  });

  const [initialValuesFetched, setInitialValuesFetched] = useState(false);

  useEffect(() => {
    // Fetch initial values only once
    if (!initialValuesFetched) {
      setUpdatedData(product);
      setInitialValuesFetched(true);
    }
  }, [product, initialValuesFetched]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      // Call the handleUpdateProduct function with the updated data
      await handleUpdateProduct(product.id, updatedData);
      toast.success('Product updated successfully!');
    } catch (error) {
      toast.error('Error updating product');
      console.error('Failed to update product:', error.message);
    }
  };

  return (
    <form>
      <TextField
        label="Name"
        name="name"
        value={updatedData.name || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        name="description"
        value={updatedData.description || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      {/* Add similar TextField components for other product fields */}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Update Product
      </Button>
    </form>
  );
};

export default ProdUpdateForm;
