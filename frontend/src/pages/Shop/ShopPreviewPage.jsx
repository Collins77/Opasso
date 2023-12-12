import React from 'react'
import styles from '../../styles/styles'
import ShopInfo from "../../components/Shop/ShopInfo";
import ShopProfileData from "../../components/Shop/ShopProfileData";
import Header from '../../components/Layout/Header';
import { useLocation } from 'react-router-dom';

const ShopPreviewPage = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  return (
    <>
      <Header />
      <div className={`${styles.section} bg-[#f5f5f5] fixed top-[150px]`}>
      <div className="mb-4">
              <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0, fontSize: "12px", color: "#000000ff" }}>
                <li><a href="/">Home/</a></li>
                {pathnames.map((name, index) => (
                  <li key={index}><a href={`/${name}`}>{name}</a></li>
                ))}
              </ul>
        </div>
         <div className="w-full 800px:flex py-10 justify-between">
          <div className="800px:w-[25%] bg-[#fff] rounded-[4px] shadow-sm 800px:overflow-y-scroll 800px:h-[90vh] 800px:sticky top-10 left-0 z-10">
            <ShopInfo isOwner={false} />
          </div>
          <div className="800px:w-[72%] mt-5 800px:mt-['unset'] rounded-[4px]">
            <ShopProfileData isOwner={false} />
          </div>
         </div>
      </div>
    </>
  )
}

export default ShopPreviewPage