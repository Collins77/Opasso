import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getAllProductsShop, deleteProduct } from "../../redux/actions/product";
import Loader from "../Layout/Loader";
import ShopActionCell from "./ShopActionCell"; // Import ShopActionCell

const AllProducts = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const { seller } = useSelector((state) => state.seller);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsShop(seller._id));
  }, [dispatch, seller._id]);

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    { field: "name", headerName: "Name", minWidth: 180, flex: 1.4 },
    { field: "price", headerName: "Price", minWidth: 100, flex: 0.6 },
    { field: "Stock", headerName: "Stock", type: "number", minWidth: 80, flex: 0.5 },
    { field: "sold", headerName: "Sold out", type: "number", minWidth: 130, flex: 0.6 },
    {
      field: "Preview",
      flex: 0.8,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => (
        <Link to={`/product/${params.id}`}>
          <Button>
            <AiOutlineEye size={20} />
          </Button>
        </Link>
      ),
    },
    {
      field: "Actions", // Added a new column for actions
      flex: 1,
      minWidth: 150,
      headerName: "Actions",
      sortable: false,
      renderCell: (params) => <ShopActionCell row={params.row} handleDelete={handleDeleteProduct} />,
    },
  ];

  const row = [];

  products &&
    products.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        price: "KES " + item.discountPrice,
        Stock: item.stock,
        sold: item?.sold_out,
      });
    });

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <DataGrid rows={row} columns={columns} pageSize={10} disableSelectionOnClick autoHeight />
      )}
    </>
  );
};

export default AllProducts;
