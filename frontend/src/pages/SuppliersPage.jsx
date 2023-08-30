import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import styles from "../styles/styles";
import SupplierCard from "../components/Route/SupplierCard/SupplierCard";
import { getAllSellers } from "../redux/actions/sellers";

const SuppliersPage = () => {
  const dispatch = useDispatch();
  const categoryData = searchParams.get("category");
  // const { sellers, isLoading } = useSelector((state) => state.seller);
  const {allSellers,isLoading} = useSelector((state) => state.shops);
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getAllSellers());
  }, [dispatch]);

  useEffect(() => {
    if (categoryData === null) {
      const d = allSellers;
      setData(d);
    } else {
      const d =
      allSellers && allSellers.filter((i) => i.category === categoryData);
      setData(d);
    }
    //    window.scrollTo(0,0);
  }, [allSellers]);



  return (
  <>
  {
    isLoading ? (
      <Loader />
    ) : (
      <div>
      <Header activeHeading={2} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-2 gap-[10px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <SupplierCard data={i} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            No Suppliers Found!
          </h1>
        ) : null}
      </div>
      <Footer />
    </div>
    )
  }
  </>
  );
};

export default SuppliersPage;