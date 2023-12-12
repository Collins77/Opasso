import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { server } from "../../server";
import styles from "../../styles/styles";
import Loader from "../Layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsShop } from "../../redux/actions/product";
import { Button } from "@material-ui/core";

const ShopInfo = ({ isOwner }) => {
  const [data,setData] = useState({});
  const {products} = useSelector((state) => state.products);
  const [isLoading,setIsLoading] = useState(false);
  const {id} = useParams();
  const dispatch = useDispatch();
  const imageUrl = "https://img.freepik.com/free-vector/conveyor-belt-warehouse-concept-illustration_114360-17998.jpg?w=1380&t=st=1702388516~exp=1702389116~hmac=2ab5ddf2c7e14e478d700d47e2aa12cf8e718d250e20f1afb000d65df81ba805";

  useEffect(() => {
    dispatch(getAllProductsShop(id));
    setIsLoading(true);
    axios.get(`${server}/shop/get-shop-info/${id}`).then((res) => {
     setData(res.data.shop);
     setIsLoading(false);
    }).catch((error) => {
      console.log(error);
      setIsLoading(false);
    })
  }, [])
  

  const logoutHandler = async () => {
    axios.get(`${server}/shop/logout`,{
      withCredentials: true,
    });
    window.location.reload();
  };

  const totalReviewsLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

  const totalRatings = products && products.reduce((acc,product) => acc + product.reviews.reduce((sum,review) => sum + review.rating, 0),0);

  const averageRating = totalRatings / totalReviewsLength || 0;
  const myStyle = {
    color: 'blue',
    fontSize: '16px',
    background: 'linear-gradient(109.6deg, rgb(255, 194, 48) 11.2%, rgb(255, 124, 0) 100.2%);'
  };

  return (
   <>
   {
    isLoading  ? (
      <Loader />
    ) : (
    //   <div>
    //   <div className="w-full py-5">
    //     <div className="w-full flex item-center justify-center">
    //       <img
    //         src={`${data.avatar?.url}`}
    //         alt=""
    //         className="w-[150px] h-[150px] object-cover rounded-full"
    //       />
    //     </div>
    //     <h3 className="text-center py-2 text-[20px]">{data.name}</h3>
    //     <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center">
    //       {data.description}
    //     </p>
    //   </div>
    //   <div className="p-3">
    //     <h5 className="font-[600]">Address</h5>
    //     <h4 className="text-[#000000a6]">{data.address}</h4>
    //   </div>
    //   <div className="p-3">
    //     <h5 className="font-[600]">Phone Number</h5>
    //     <h4 className="text-[#000000a6]">{data.phoneNumber}</h4>
    //   </div>
    //   <div className="p-3">
    //     <h5 className="font-[600]">Total Products</h5>
    //     <h4 className="text-[#000000a6]">{products && products.length}</h4>
    //   </div>
    //   <div className="p-3">
    //     <h5 className="font-[600]">Dollar Exchange Rate</h5>
    //     <h4 className="text-[#000000b0]">KES {data.exchangeRate}</h4>
    //   </div>
    //   <div className="p-3">
    //     <h5 className="font-[600]">Joined On</h5>
    //     <h4 className="text-[#000000b0]">{data?.createdAt?.slice(0, 10)}</h4>
    //   </div>
    //   {isOwner && (
    //     <div className="py-3 px-4">
    //        <Link to="/settings">
    //        <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}>
    //         <span className="text-white">Edit Shop</span>
    //       </div>
    //        </Link>
    //       <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}
    //       onClick={logoutHandler}
    //       >
    //         <span className="text-white">Log Out</span>
    //       </div>
    //     </div>
    //   )}
    // </div>
    <div className="W-full shadow-sm bg-slate-100 p-3">
      <div className="flex w-full justify-between p-4 h-1/4 mb-4 border-b-2 border-black gap-2" style={myStyle}>
        <img src={imageUrl} alt="" className="w-1/5 h-full" />
        <div className="w-3/4 h-full flex flex-col gap-2">
          <h2 className="font-bold text-black">{data.name}</h2>
          <span className="font-light text-[#ffffffe8]">{data.address}</span>
          <span>{data.category}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-[#ffffffdb]">Dollar Exchange Rate</p>
          <span>KES {data.exchangeRate}</span>
        </div>
        <div className="flex justify-between">
          <p className="text-[#ffffffdb]">Phone Number</p>
          <span>{data.phoneNumber}</span>
        </div>
        <div className="flex justify-between">
          <p className="text-[#ffffffdb]">Joined on</p>
          <span>{data?.createdAt?.slice(0, 10)}</span>
        </div>
        <div className="flex justify-between">
          <p>Total Products</p>
          <span>{products && products.length}</span>
        </div>
      </div>
      <div>
      <div>
        <Button className="w-full bg-transparent hover:bg-orange-400 hover:text-white text-black rounded-full font-bold border border-orange-500 hover:border-transparent">
          Message Seller
        </Button>
      </div>
      </div>
    </div>
    )
   }
   </>
  );
};

export default ShopInfo;
