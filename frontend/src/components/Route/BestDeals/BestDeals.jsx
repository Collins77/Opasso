import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../../styles/styles";
// import ProductCard from "../ProductCard/ProductCard";
import SupplierCard from "../SupplierCard/SupplierCard";
import { getAllSellers } from "../redux/actions/sellers";


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
  const {allSellers} = useSelector((state) => state.seller);

  useEffect(() => {
    dispatch(getAllSellers());
  }, [dispatch]);
  

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Featured Suppliers</h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
        {
            allSellers && allSellers.length !== 0 &&(
              <>
               {allSellers && allSellers.map((i, index) => <SupplierCard data={i} key={index} />)}
              </>
            )
           }
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
