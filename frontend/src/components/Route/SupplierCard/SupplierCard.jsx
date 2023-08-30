import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const SupplierCard = ({ sellers,isEvent }) => {

  return (
    <>
        <div className="w-full h-[800px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
            <Link to={`/shop/preview/${sellers?.shop._id}`}>
                <h5 className={`${styles.shop_name}`}>{sellers.shop.name}</h5>
            </Link>
        </div>
    </>
  )
}

export default SupplierCard