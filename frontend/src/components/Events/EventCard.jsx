import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";

const EventCard = ({ active, data }) => {
  // const { cart } = useSelector((state) => state.cart);
  // const dispatch = useDispatch();

  // const addToCartHandler = (data) => {
  //   const isItemExists = cart && cart.find((i) => i._id === data._id);
  //   if (isItemExists) {
  //     toast.error("Item already in cart!");
  //   } else {
  //     if (data.stock < 1) {
  //       toast.error("Product stock limited!");
  //     } else {
  //       const cartData = { ...data, qty: 1 };
  //       dispatch(addTocart(cartData));
  //       toast.success("Item added to cart successfully!");
  //     }
  //   }
  // }
  return (
    // <div
    //   className={`w-full block bg-white rounded-lg ${
    //     active ? "unset" : "mb-12"
    //   } lg:flex p-2`}
    // >
    //   <div className="w-full lg:-w[50%] m-auto">
    //     <img src={`${data.images[0]?.url}`} alt="" />
    //   </div>
    //   <div className="w-full lg:[w-50%] flex flex-col justify-center">
    //     <h2 className={`${styles.productTitle}`}>{data.name}</h2>
    //     <p>{data.description}</p>
    //     <div className="flex py-2 justify-between">
    //       <div className="flex">
    //         <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
    //           KES {data.originalPrice}
    //         </h5>
    //         <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
    //           KES {data.discountPrice}
    //         </h5>
    //       </div>
    //       <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
    //         In Stock
    //       </span>
    //     </div>
    //     <CountDown data={data} />
    //     <br />
    //     <div className="flex items-center">
    //       <Link to={`/product/${data._id}?isEvent=true`}>
    //         <div className={`${styles.button} text-[#fff]`}>See Details</div>
    //       </Link>
    //       {/* <div className={`${styles.button} text-[#fff] ml-5`} onClick={() => addToCartHandler(data)}>Add to cart</div> */}
    //     </div>
    //   </div>
    // </div>
    <div
  class="flex flex-col w-full rounded-lg bg-neutral-300 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] h-[300px] mb-5">
  {/* <img
    class="h-50 w-full rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg"
    src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
    alt="" /> */}
    <img
      className="h-full w-30% object-contain"
      src={`${data.images[0]?.url}`} 
      alt="" 
     />
  <div class="flex flex-col justify-start p-6">
    <h5
      class="mb-2 text-xl font-medium text-neutral-80 ">
      {data.title}
    </h5>
    <h5
      class="mb-2 text-xl font-medium text-neutral-800">
      {data.name}
    </h5>
    <p class="mb-4 text-base text-neutral-60">
      {data.description}
    </p>
    <p class="text-xs text-neutral-500">
      <CountDown data={data} />
    </p>
  </div>
</div>
  );
};

export default EventCard;
