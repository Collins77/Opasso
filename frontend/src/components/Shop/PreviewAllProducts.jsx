import React, { useState } from 'react'
import DataTable from 'react-data-table-component'

const PreviewAllProducts = () => {
    const columns = [
        {
            name: 'Title',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name:'Age',
            selector: row => row.age,
            sortable: true,
        }
    ];
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
    const [records, setRecords] = useState(data);

    function handleFilter(event) {
        const newData = data.filter(row => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
    }
  return (
    <>
    <div className="text-end"><input type="text" onChange={handleFilter} /></div>
        <DataTable
        columns={columns}
        data={records}
        fixedHeader
        pagination
        >

        </DataTable>
    </>
  )
}

export default PreviewAllProducts