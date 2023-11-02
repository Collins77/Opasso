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
//     <div
//   className={`flex flex-row w-[80%] p-10 
//   mx-auto mb-12 ${active ? 'w-4/5' : 'w-2/5'}
//   rounded-lg 
//   bg-neutral-50
//   shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] h-[300px] mb-5`}>
//     <img
//       className="h-full w-[45%] object-contain"
//       src={`${data.images[0]?.url}`} 
//       alt="" 
//      />
//   <div class="h-full w-[55%] flex flex-col justify-start">
//     <h3
//       class="mb-2 text-sm font-semibold text-[#c23b01]">
//       {data.title}
//     </h3>
//     <h4
//       class="mb-2 text-sm font-semibold text-[#c23b01]">
//       {data.event_description}
//     </h4>
//     <h2
//       class="mb-2 text-xl font-medium text-neutral-800">
//       {data.name}
//     </h2>
//     <p class="mb-4 text-base text-neutral-60">
//       {data.description}
//     </p>
//     <p class="text-xs text-neutral-500">
//       <CountDown data={data} />
//     </p>
//   </div>
// </div>

<div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
<div className="bg-indigo-600 text-white rounded shadow-xl py-5 px-5 w-full lg:w-10/12 xl:w-3/4">
  <div className="flex flex-wrap -mx-3 items-center">
    <div className="w-1/4 px-3 text-center hidden md:block">
      {/* Your SVG code here */}
    </div>
    <div className="w-full sm:w-1/2 md:w-2/4 px-3 text-left">
      <div className="p-5 xl:px-8 md:py-5">
        <h3 className="text-2xl">Welcome, Scott!</h3>
        <h5 className="text-xl mb-3">Lorem ipsum sit amet</h5>
        <p className="text-sm text-indigo-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit...
        </p>
      </div>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/4 px-3 text-center">
      <div className="p-5 xl:px-8 md:py-5">
        <a
          href="https://codepen.io/ScottWindon"
          className="block w-full py-2 px-4 rounded text-indigo-600 bg-gray-200 hover:bg-white hover:text-gray-900 focus:outline-none transition duration-150 ease-in-out mb-3"
        >
          Find out more?
        </a>
      </div>
    </div>
  </div>
</div>
<div className="absolute bottom-0 pb-2 text-gray-700 text-xs w-full text-center">
  See more:{' '}
  <a href="https://codepen.io/ScottWindon" className="underline hover:text-gray-500">
    https://codepen.io/ScottWindon
  </a>
</div>
</div>



  );
};

export default EventCard;
