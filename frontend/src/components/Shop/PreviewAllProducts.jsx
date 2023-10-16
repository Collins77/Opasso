import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import Loader from "../Layout/Loader";
import { Button, Checkbox, MenuItem, Select } from "@material-ui/core";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import MaterialTable from 'material-table';
import { categoriesData } from "../../static/data";


const PreviewAllProducts = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const { id } = useParams();
  const [filteredData, setFilteredData] = useState(products);
  const [filter, setFilter] = useState(true);
  const [category, setCategory] = useState('all');
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
  ];

  const handleChange = () => {
    setFilter(!filter)
  }

  useEffect(() => {
    setFilteredData(category === 'all' ? products : products.filter(item=>item.category===category))
  },[category, products])
 
 
  return (
   <>
    {isLoading ? (
      <Loader />
    ) : (
      <div className="w-full mx-8 pt-1 mt-10 bg-white">
        
        <MaterialTable
          title="Products"
          data={filteredData}
          columns={columns}
          options={{
            filtering:filter
          }}
          actions={[
            {
              icon: () =><Checkbox
              checked={filter}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'primary checkbox' }}
              />,
              tooltip: "Hide/Show Filter Options",
              isFreeAction: true,
            },
            {
              icon: () => <Select
              labelId="select-label"
              id="simple-select"
              style={{width:100}}
              value={category}
              onChange={(e) =>setCategory(e.target.value)}
              > 
              <MenuItem value={'all'}>All</MenuItem>
              {categoriesData &&
                  categoriesData.map((i) => {
                    return (
                      <MenuItem value={"category"}>{i.title}</MenuItem>
                    )
                  })
                } 
              </Select>,
              tooltip: "Filter Categories",
              isFreeAction: true,
            }
          ]}
        />
      </div>
    )}
   </> 
  )

};

export default PreviewAllProducts;
