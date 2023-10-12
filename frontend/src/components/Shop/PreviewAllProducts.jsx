import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import Loader from "../Layout/Loader";
import { Button } from "@material-ui/core";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const PreviewAllProducts = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsShop(id));
  }, [dispatch, id]);

  const [filteredProducts, setFilteredProducts] = useState(products);

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
      filterOperators: ["equals"],
      filterOperator: "equals",
      valueGetter: (params) => params.row.category,
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

  // const rows = products?.map((item) => ({
  //   id: item._id,
  //   name: item.name,
  //   price: `US$ ${item.discountPrice}`,
  //   Stock: item.stock,
  //   category: item.category,
  // }));

  const handleFilterChange = (filterModel) => {
    if (filterModel.items.length === 0) {
      setFilteredProducts(products);
    } else {
      const selectedCategory = filterModel.items[0].value;
      const filtered = products.filter((item) => item.category === selectedCategory);
      setFilteredProducts(filtered);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={filteredProducts}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
            components={{
              Toolbar: GridToolbar,
            }}
            onFilterModelChange={(model) => handleFilterChange(model)}
          />
        </div>
      )}
    </>
  );
};

export default PreviewAllProducts;
