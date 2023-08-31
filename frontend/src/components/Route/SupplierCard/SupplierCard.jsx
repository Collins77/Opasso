import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const SupplierCard = ({ data,isEvent }) => {

  return (
    <>
        {/* <div className="w-full h-[200px] rounded-lg shadow-sm p-3 relative cursor-pointer col-span-4"> */}
        <Link to={`/shop/preview/${data?._id}`}>
          
          <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img className="w-7 h-7 mb-3 rounded-full" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" src={`${data.avatar?.url}`}/>
              <a href="#">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}</h5>
              </a>
              <div className="mb-3 flex mt-4 space-x-3 md:mt-6">
                <p>Dollar Exchange Rate: <span>{data.exchangeRate}</span></p>
                <p>Location: <span>{data.address}</span></p>
              </div>
              <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
                <Link to={`/shop/preview/${data?._id}`} className="inline-flex items-center text-blue-600 hover:underline">
                  See our Inventory
                  <svg class="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                  </svg>
                </Link>
              </a>
          </div>

        </Link>


        {/* </div> */}
    </>
  )
}

export default SupplierCard