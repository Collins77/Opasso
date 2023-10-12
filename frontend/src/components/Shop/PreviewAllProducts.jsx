import { Button, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import Loader from "../Layout/Loader";
import { categoriesData } from "../../static/data";

const PreviewAllProducts = () => {
  const { products, isLoading } = useSelector((state) => state.products);
//   const { seller } = useSelector((state) => state.seller);
  const {id} = useParams();
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    dispatch(getAllProductsShop(id, selectedCategory));
  }, [dispatch, id, selectedCategory]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);

    // Filter products based on the selected category
    const filtered = products.filter((product) => product.category === e.target.value);
    setFilteredProducts(filtered);
  };


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
      field: "sold",
      headerName: "Sold out",
      type: "number",
      minWidth: 130,
      flex: 0.6,
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
    // {
    //   field: "Delete",
    //   flex: 0.8,
    //   minWidth: 120,
    //   headerName: "",
    //   type: "number",
    //   sortable: false,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <Button onClick={() => handleDelete(params.id)}>
    //           <AiOutlineDelete size={20} />
    //         </Button>
    //       </>
    //     );
    //   },
    // },
  ];

  const row = filteredProducts.map((item) => ({
        id: item._id,
        name: item.name,
        price: "US$ " + item.discountPrice,
        Stock: item.stock,
        sold: item?.sold_out,
  }));

  products &&
    products.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        price: "US$ " + item.discountPrice,
        Stock: item.stock,
        sold: item?.sold_out,
      });
    });

  return (
    <>
        <div className="category-filter w-full mx-8">
            <FormControl
            className="w-[350px] border"
            >
              <InputLabel>Filter by Category</InputLabel>
                <Select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <MenuItem value="">All</MenuItem>
                  {categoriesData && 
                    categoriesData.map((i) => (
                      <MenuItem key={i} value={i}>
                        {i.title}
                      </MenuItem>
                    ))
                  }
                  
                </Select>
            </FormControl>
          </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={selectedCategory ? row :
              products &&
                products.forEach((item) => {
                  row.push({
                    id: item._id,
                    name: item.name,
                    price: "US$ " + item.discountPrice,
                    Stock: item.stock,
                    sold: item?.sold_out,
                  })
                })
            }
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      )}
    </>
  );
};

export default PreviewAllProducts;
