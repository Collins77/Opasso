import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../../styles/styles";
import SupplierCard from "../SupplierCard/SupplierCard";
import { getAllSuppliers } from "../../../redux/actions/sellers";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BestDeals = () => {
  const dispatch = useDispatch();
  const {sellers} = useSelector((state) => state.seller);

  useEffect(() => {
    dispatch(getAllSuppliers());
  }, [dispatch]);
  
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // You can adjust the number of slides shown at once
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Featured Suppliers</h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
        {/* {
            sellers && sellers.length !== 0 &&(
              <>
               {sellers && sellers.map((i, index) => <SupplierCard data={i} key={index} />)}
              </>
            )
          }         */}
          <Slider {...sliderSettings}>
          {sellers &&
            sellers.length !== 0 &&
            sellers.map((i, index) => (
              <SupplierCard data={i} key={index} />
            ))}
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
