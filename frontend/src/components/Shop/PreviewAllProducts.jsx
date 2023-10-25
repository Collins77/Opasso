import { Button } from "@material-ui/core";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import Loader from "../Layout/Loader";

const PreviewAllProducts = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const { id } = useParams();
  

  // const [columnVisibilityModel, setColumnVisibilityModel] = React.useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsShop(id));
  }, [dispatch, id]);


  const columns = [
    { field: "id", headerName: "Product Id", hide: true, minWidth: 150, flex: 0.7 },
    { field: "partNumber", headerName: "Part Number", minWidth: 150, flex: 0.7 },
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
      renderCell: (params) => {
        const currency1 = 'USD'; // First currency
        const currency2 = 'KES'; // Second currency
        const selectedCurrency = params.row.currency; // Assuming you have a currency field in your data
  
        // Adjust the currency display based on the selectedCurrency
        const priceInSelectedCurrency =
          selectedCurrency === currency1
            ? params.row.price // Display the price as-is for currency1
            : params.row.priceInCurrency2; // Display priceInCurrency2 for currency2
  
        return (
          <span>
            {priceInSelectedCurrency} {selectedCurrency}
          </span>
        );
      },
    },
    {
      field: "category",
      headerName: "Category",
      minWidth: 200,
      flex: 0.6,
    },
    {
      field: "exchangeRate",
      headerName: "Exchange Rate",
      type: "number",
      minWidth: 80,
      flex: 0.5,
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

  const row = [];

  products &&
    products.forEach((item) => {
      row.push({
        id: item._id,
        partNumber: item.partNumber,
        name: item.name,
        price: "US$ " + item.discountPrice,
        category: item.category,
        exchangeRate: item.shop.exchangeRate,
        sold: item?.sold_out,
      });
    });

  return (
    <>
      
      {isLoading ? (
        <Loader />
      ) : (

          <div>
            <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
            initialState={{
              filter: {
                filterModel: {
                  items: [],
                  quickFilterValues: [''],
                },
              },
            }}
            disableColumnFilter
            disableDensitySelector
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
          />
          </div>
          
      )}
    </>
  );
};

export default PreviewAllProducts;
