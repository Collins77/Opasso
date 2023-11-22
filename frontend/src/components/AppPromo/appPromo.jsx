import React from 'react';
import styles from '../../styles/styles';
import DownloadAds from './DownloadAds';

const AppPromo = () => {
  return (
    // <div className={`${styles.section} p-4 mb-12 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8`}>
    //   <h5 className="mb-2 text-3xl font-bold text-gray-900">Work fast from anywhere</h5>
    //   <p className="mb-5 text-base text-gray-500 sm:text-lg">
    //     Stay up to date and move work forward with Opasso on iOS & Android. Download the app today.
    //   </p>
    //   <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
    //     <a href="#" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5">
    //       <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    //         <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8..."></path>
    //       </svg>
    //       <div className="text-left">
    //         <div className="mb-1 text-xs">Download on the</div>
    //         <div className="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
    //       </div>
    //     </a>
    //     <a href="#" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5">
    //       <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    //         <path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path>
    //       </svg>
    //       <div className="text-left">
    //         <div className="mb-1 text-xs">Get in on</div>
    //         <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
    //       </div>
    //     </a>
    //   </div>
    // </div>
    <div className={`${styles.section} flex flex-col items-center justify-start px-[5rem] bg-white h-[48rem] pt-[18rem] mt-[-10rem] relative z-[0] rounded-b-[5rem]`}>
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
