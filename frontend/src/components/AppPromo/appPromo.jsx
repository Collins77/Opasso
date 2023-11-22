import React from 'react';
import styles from '../../styles/styles';
import DownloadAds from './DownloadAds';

const AppPromo = () => {
  return (
    <div className={`${styles.section} flex flex-col items-center justify-start px-8 bg-white h-[500px] pt-[18rem] mt-4 relative z-[0] rounded-b-[5rem]`}>
      {/* tild icon or path icon */}
      <img src={require("../img/Path 318.png")} alt="" className="w-[5rem]" />
      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>Work fast from anywhere</span>
        <span>
          <b>App Now!</b>
        </span>
        <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[1rem]">
        Stay up to date and move work forward with Opasso on 
        iOS & Android. Download the app today.
        </span>
      </div>
      {/* dowload ads */}
      <div className="mt-14">
        <DownloadAds />
      </div>
    </div>
  );
};

export default AppPromo;
