import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import Loader from "../Layout/Loader";
import { Button, IconButton, InputAdornment, TextField } from "@material-ui/core";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const PreviewAllProducts = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsShop(id));
  }, [dispatch, id]);


  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 100,
      flex: 0.6,
    },
    {
      field: "Stock",
      headerName: "Stock",
      type: "number",
      minWidth: 80,
      flex: 0.5,
    },
    {
      field: "category",
      headerName: "Category",
      minWidth: 130,
      flex: 0.6,
      filterOperators: ["equals", "customCategoryFilter"],
      filterOperator: "customCategoryFilter",
      // valueGetter: (params) => params.row.category,
      renderCell: (params) => {
        return <span>{params.value}</span>;
      },
    },
    {
      field: "Preview",
      flex: 0.8,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.id}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  // const rows = []


  const rows = products?.map((item) => ({
    id: item._id,
    name: item.name,
    price: `US$ ${item.discountPrice}`,
    Stock: item.stock,
    category: item.category,
  }));

  const CustomFilterComponent = ({onFilterChange}) => {
    const [filterValue, setFilterValue] = useState('');

    const handleFilterChange = (event) => {
      const value = event.target.value;
      setFilterValue(value);
      onFilterChange(value);
    };

    return (
      <TextField
        variant="outlined"
        size="small"
        placeholder="Filter by Category"
        value={filterValue}
        onChange={handleFilterChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton size="small">
                <BiSearch />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  };

  const [filterValue, setFilterValue] = useState('');
  const handleFilterChange = (value) => {
    setFilterValue(value);
  };

  const filteredRows = rows.filter((row) => row.category.toLowerCase().includes(filterValue.toLowerCase()))

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={filteredRows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
            components={{
              Toolbar: () => (
                <div>
                  <GridToolbar />
                  <CustomFilterComponent onFilterChange={handleFilterChange} />
                </div>
              ),
            }}
            
          />
        </div>
      )}
    </>
  );
};

export default PreviewAllProducts;
