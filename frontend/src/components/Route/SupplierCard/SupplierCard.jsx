import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const SupplierCard = ({ data,isEvent }) => {

  return (
    <>
        <div className="w-full h-[200px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
            <Link to={`/shop/preview/${data?._id}`}>
                <h5 className="pb-3 font-[500]">{data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}</h5>
            </Link>
        </div>
    </>
  )
}

export default SupplierCard