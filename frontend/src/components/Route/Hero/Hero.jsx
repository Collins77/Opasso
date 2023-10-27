import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";

const Hero = () => {
  const { sellers } = useSelector((state) => state.seller);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredSuppliers =
      sellers &&
      sellers.filter((seller) =>
        seller.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredSuppliers);
  };
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          // "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
          "url(https://img.freepik.com/free-photo/group-trained-workers-using-depot-equipment-working-packaging-department-with-packages-people-using-merchandise-boxes-pack-ship-products-industrial-stock-distribution_482257-59957.jpg?w=1800&t=st=1692078683~exp=1692079283~hmac=72090d43c2e93d347a7436eadbff3e26e402496d03da853e8eabd27f97d7ec52)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[30px] leading-[1.2] 800px:text-[60px] text-[#fff] font-[600] capitalize flex text-center`}
        >
         Access manufacturers  <br/> and suppliers across the world
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#aeaeae] flex text-center">
          Search for and find a supplier for your preferred products and even services from across the world
        </p>
        {/* <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link> */}
        <div className="w-[100%] relative mt-3 justify-items-center">
            <input
              type="text"
              placeholder="Search Supplier..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#f67009] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute w-full min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    return (
                      <Link to={`/suppliers/${i._id}`}>
                        <div className="w-full flex items-start-py-3 mb-2">
                          <img
                            src={`${i.avatar?.url}`}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>
      </div>
    </div>
  );
};

export default Hero;
