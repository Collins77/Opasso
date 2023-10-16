import { Button, FormControlLabel, Switch } from "@material-ui/core";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
// import {GridFilterModel} from '@mui/x-data-grid'
import React, { useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import Loader from "../Layout/Loader";

const PreviewAllProducts = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const { id } = useParams();
  const [filterModel, setFilterModel] = React.useState({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    quickFilterValues: ['1'],
  });

  const [columnVisibilityModel, setColumnVisibilityModel] = React.useState({});

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
    },
    {
      field: "category",
      headerName: "Category",
      minWidth: 200,
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
        Stock: item.stock,
        sold: item?.sold_out,
      });
    });

  return (
    <>
      
      {isLoading ? (
        <Loader />
      ) : (

          <div>
            <FormControlLabel
              checked={columnVisibilityModel.id !== false}
              onChange={(event) =>
                setColumnVisibilityModel(() => ({ id: event.target.checked }))
              }
              control={<Switch color="primary" size="small" />}
              label="Show ID column"
            />
            <FormControlLabel
              checked={filterModel.quickFilterExcludeHiddenColumns}
              onChange={(event) =>
                setFilterModel((model) => ({
                  ...model,
                  quickFilterExcludeHiddenColumns: event.target.checked,
                }))
              }
              control={<Switch color="primary" size="small" />}
              label="Exclude hidden columns"
            />
            <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
            disableColumnFilter
            disableDensitySelector
            slots={{ toolbar: GridToolbar }}
            filterModel={filterModel}
            onFilterModelChange={(newModel) => setFilterModel(newModel)}
            slotProps={{ toolbar: { showQuickFilter: true } }}
            columnVisibilityModel={columnVisibilityModel}
            onColumnVisibilityModelChange={(newModel) =>
              setColumnVisibilityModel(newModel)
            }
            componentsProps={{
              toolbar: {
                  showQuickFilter: true,
                     quickFilterProps: { debounceMs: 500 },
               },
            }}
          />
          </div>
          
      )}
    </>
  );
};

export default PreviewAllProducts;
