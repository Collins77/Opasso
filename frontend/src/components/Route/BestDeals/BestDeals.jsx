import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../../styles/styles";
import SupplierCard from "../SupplierCard/SupplierCard";
import { getAllSuppliers } from "../../../redux/actions/sellers";



const BestDeals = () => {
  const dispatch = useDispatch();

  // const [data, setData] = useState([]);
  // const { allProducts } = useSelector((state) => state.products);
  // useEffect(() => {
  //   const allProductsData = allProducts ? [...allProducts] : [];
  //   const sortedData = allProductsData?.sort((a,b) => b.sold_out - a.sold_out); 
  //   const firstFive = sortedData && sortedData.slice(0, 5);
  //   setData(firstFive);
  // }, [allProducts]);
  const {sellers} = useSelector((state) => state.seller);

  useEffect(() => {
    dispatch(getAllSuppliers());
  }, [dispatch]);
  

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Featured Suppliers</h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
        {
            sellers && sellers.length !== 0 &&(
              <>
               {sellers && sellers.map((i, index) => <SupplierCard data={i} key={index} />)}
              </>
            )
           }
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
