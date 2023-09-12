import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Layout/Loader';

const PreviewAllProducts = () => {
    const { products, isLoading } = useSelector((state) => state.products);
    const { seller } = useSelector((state) => state.seller);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProductsShop(seller._id));
    }, [dispatch]);

    const columns = [
        { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
        {
            field: 'partNumber',
            name: 'Part Number',
            selector: row => row.partNumber,
            sortable: true,
        },
        {
            field: "name",
            name: "Name",
            selector: row => row.name,
            minWidth: 180,
            flex: 1.4,
            sortable: true,
        },
        {
            field: "price",
            name: "Price",
            selector: row => row.price,
            minWidth: 100,
            flex: 0.6,
            sortable: true,
        },
        {
            field: "Stock",
            name: "Stock",
            type: "number",
            selector: row => row.stock,
            minWidth: 80,
            flex: 0.5,
        },

        {
            field: "sold",
            name: "Sold out",
            type: "number",
            selector: row => row.sold,
            minWidth: 130,
            flex: 0.6,
        },
        {
            field: "Preview",
            flex: 0.8,
            minWidth: 100,
            name: "",
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
    const data = [
        {
            id: 1,
            name: 'yousaf',
            email: 'yousaf@gmail.com',
            age: '23'
        },
        {
            id: 2,
            name: 'collins',
            email: 'yousaf@gmail.com',
            age: '23'
        },
        {
            id: 3,
            name: 'jimmy',
            email: 'yousaf@gmail.com',
            age: '23'
        },
        {
            id: 4,
            name: 'kamau',
            email: 'yousaf@gmail.com',
            age: '23'
        },
        {
            id: 5,
            name: 'omwami',
            email: 'yousaf@gmail.com',
            age: '23'
        },
        {
            id: 1,
            name: 'yousaf',
            email: 'yousaf@gmail.com',
            age: '23'
        },
        {
            id: 2,
            name: 'collins',
            email: 'yousaf@gmail.com',
            age: '23'
        },
        {
            id: 3,
            name: 'jimmy',
            email: 'yousaf@gmail.com',
            age: '23'
        },
        {
            id: 4,
            name: 'kamau',
            email: 'yousaf@gmail.com',
            age: '23'
        },
        {
            id: 5,
            name: 'omwami',
            email: 'yousaf@gmail.com',
            age: '23'
        },
    ]
    products &&
    products.forEach((item) => {
      row.push({
        id: item._id,
        partNumber: item.partNumber,
        name: item.name,
        price: "US$ " + item.discountPrice,
        Stock: item.stock,
        sold: item?.sold_out,
      });
    });
    const [records, setRecords] = useState(data);

    function handleFilter(event) {
        const newData = data.filter(row => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
    }
  return (
    <>
    {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
            <div className="text-end"><input type="text" onChange={handleFilter} /></div>
            <DataTable
            row={row}
            columns={columns}
            // data={records}
            fixedHeader
            pagination
            >

            </DataTable>
        </div>
        )
      }
    </>
  )
}

export default PreviewAllProducts