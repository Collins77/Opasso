import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const SupplierCard = ({ data,isEvent }) => {

  return (
    <>
        <div className="w-full h-[200px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
        <Link to={`/shop/preview/${data?._id}`}>
          <img
            src={`${data.images && data.images[0]?.url}`}
            alt=""
            className="w-full h-[50%] object-contain"
          />
        </Link>
            <Link to={`/shop/preview/${data?._id}`}>
                <h5 className="pb-3 font-[500]">{data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}</h5>
                <div className="flex">
          {/* <Ratings rating={data?.ratings} /> */}
          </div>

          <div className="py-2 flex items-center justify-between">
            <div className="flex">
              {/* <h5 className={`${styles.productDiscountPrice}`}>
                {data.originalPrice === 0
                  ? data.originalPrice
                  : data.discountPrice}
                $
              </h5> */}
              {/* <h4 className={`${styles.price}`}>
                {data.originalPrice ? data.originalPrice + " $" : null}
              </h4> */}
            </div>
            {/* <span className="font-[400] text-[17px] text-[#68d284]">
              {data?.sold_out} stock
            </span> */}
          </div>
            </Link>

        </div>
    </>
  )
}

export default SupplierCard