import { Button, MenuItem, Select, Switch, makeStyles } from "@material-ui/core";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import Loader from "../Layout/Loader";

const PreviewAllProducts = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const { id } = useParams();
  const [selectedCurrency, setSelectedCurrency] = useState("KES"); 


  const useStyles = makeStyles((theme) => ({
    // Add a class for USD currency
    usdPrice: {
      color: "green", // Change this color to the desired color for USD
    },
    // Add a class for Local currency
    localPrice: {
      color: "red", // Change this color to the desired color for Local currency
    },
  }));
  
  const classes = useStyles(); 
  const headerText =
    selectedCurrency === "USD" ? "USD" : "KES";
  
  const handleCurrencyChange = () => {
    setSelectedCurrency((prevCurrency) => prevCurrency === "KES" ? "USD" : "local")
  }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsShop(id));
  }, [dispatch, id]);

  const columns = [
    { field: "id", headerName: "Product Id", hide: true, minWidth: 150, flex: 0.7 },
    { field: "partNumber", headerName: "Part Number", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Description",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "price",
      headerName: (
        <div>
          <Select
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            style={{ marginRight: "8px" }}
          >
            <MenuItem value="KES">KES</MenuItem>
            <MenuItem value="USD">USD</MenuItem>
          </Select>
        </div>
      ),
      headerClassName:
        selectedCurrency === "USD"
          ? classes.usdHeader
          : classes.localHeader,
      minWidth: 100,
      flex: 0.6,
      renderCell: (params) => {
        const item = products.find((product) => product._id === params.row.id);

        const priceInUSD = item.discountPrice / item.shop.exchangeRate;
        const priceInLocal = item.discountPrice;
        

        return (
          <span>
            {selectedCurrency === "USD"
              ? `$${priceInUSD.toFixed(2)}`
              : `KES ${priceInLocal}`}
          </span>
        );
      },
    },
    {
      field: "isAvailable",
      headerName: "Availability",
      minWidth: 200,
      flex: 0.4,
      valueGetter: (params) => (params.row.isAvailable ? "Available" : "Out of Stock")
    },
    {
      field: "category",
      headerName: "Category",
      minWidth: 200,
      flex: 0.6,
    },
    {
      field: "brand",
      headerName: "Brand",
      minWidth: 200,
      flex: 0.4,
    },
    
    {
      field: "warranty",
      headerName: "Warranty in mon",
      type: "number",
      minWidth: 80,
      flex: 0.5,
    },
    {
      field: "category",
      headerName: "Category",
      minWidth: 200,
      flex: 0.6,
    },
    {
      field: "brand",
      headerName: "Brand",
      minWidth: 200,
      flex: 0.4,
    },
    {
      field: "Preview",
      flex: 0.8,
      minWidth: 100,
      headerName: "Preview",
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
        category: item.category,
        brand: item.brand,
        warranty: item.warranty,
        isAvailable: item.isAvailable,
        sold: item?.sold_out,
      });
    });

  return (
    <>
      
      {isLoading ? (
        <Loader />
      ) : (

          <div>
            <label className="mb-2 mr-2">
              Currency :
            </label>
            {/* <Select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="w-[300] border mb-4"
                >
                <MenuItem value="KES">KES</MenuItem>
                <MenuItem value="USD">USD</MenuItem>
            </Select> */}
            <Switch
             checked={selectedCurrency === "USD"}
             onChange={handleCurrencyChange}
             name="currencySwitch"
             inputProps={{"aria-label": "Currency Switch"}}
             />
             {selectedCurrency === "USD" ? "USD" : "KES"}
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
            columnVisibilityModel={{
              id: false,
              category: false,
              brand: false,
            }}
            // disableColumnFilter
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
