import React from 'react';
import { RxCross1 } from 'react-icons/rx';
import styles from '../../styles/styles';
import { Link, Navigate } from "react-router-dom";
import { useDispatch } from 'react-redux';


const RedirectModal = ({ isOpen, onClose, message }) => {
  // const history = useHistory();
  const dispatch = useDispatch();

  const handleConfirm = ({isOpen, onClose, message}) => {
    // Close the modal (implement this based on your requirements)
    onClose();

    
    return <Navigate to="/login" replace />;
  };

  const handleClose = () => {
    // Close the modal (implement this based on your requirements)
    onClose();
  };

  return (
    // <div className="w-full fixed top-0 left-0 z-[999] bg-[#00000039] flex items-center justify-center h-screen">
    //         <div className="w-[95%] 800px:w-[40%] min-h-[20vh] bg-white rounded shadow p-5">
    //           <div className="w-full flex justify-end cursor-pointer">
    //           <RxCross1 size={25} onClick={handleClose} />
    //           </div>
    //           <h3 className="text-[25px] text-center py-5 font-Poppins text-[#000000cb]">
    //             {message}
    //           </h3>
    //           <div className="w-full flex items-center justify-center">
    //             <div
    //               className={`${styles.button} text-white text-[18px] !h-[42px] mr-4`}
    //               onClick={handleClose}
    //             >
    //               cancel
    //             </div>
    //             <Link
    //               to='/login'
    //               className={`${styles.button} text-white text-[18px] !h-[42px] ml-4`}
    //               onClick={handleConfirm}
    //             >
    //               confirm
    //             </Link>
    //           </div>
    //         </div>
    //       </div>

      <div class="w-full fixed top-0 left-0 z-[999] bg-[#00000039] flex items-center justify-center h-screen">
          <div class="w-[95%] 800px:w-[40%] min-h-[20vh] bg-white rounded shadow p-5">
              <div class="relative bg-white rounded-lg shadow">
                  <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                      <span class="sr-only">Close modal</span>
                  </button>
                  <div class="p-4 md:p-5 text-center">
                      <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                      </svg>
                      <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                      <Link 
                      to='/login'
                      className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                          Yes, I'm sure
                      </Link>
                      <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                  </div>
              </div>
          </div>
      </div>

  );
};

export default RedirectModal;
