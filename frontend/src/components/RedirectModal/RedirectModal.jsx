import React, { useEffect } from 'react';
import { Link, Navigate } from "react-router-dom";
// import './redirect.css'

const RedirectModal = ({ isOpen, onClose, message, delayRedirect }) => {
  // const history = useHistory();
  // const dispatch = useDispatch();

  useEffect(() => {
    // Use a timer to close the modal and redirect after a specified delay
    const timer = setTimeout(() => {
      onClose();
      return <Navigate to="/login" replace />;
    }, delayRedirect);

    // Clear the timer on component unmount or when the modal is closed manually
    return () => clearTimeout(timer);
  }, [onClose, delayRedirect]);
  // const handleConfirm = ({isOpen, onClose, message}) => {
  //   // Close the modal (implement this based on your requirements)
  //   onClose();

    
  //   return <Navigate to="/login" replace />;
  // };

  const handleClose = () => {
    // Close the modal (implement this based on your requirements)
    onClose();
  };

  return (
      <div class="w-full fixed top-0 left-0 z-[1] flex items-center justify-center h-screen">
          <div class="w-[95%] 800px:w-[40%] min-h-[20v] p-5">
              <div class="relative bg-white rounded-lg shadow">
                  <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                      <span class="sr-only">Close modal</span>
                  </button>
                  <div class="p-4 md:p-5 text-center">
                      <svg class="mx-auto mb-4 text-red-400 w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                      </svg>
                      <span class="text-2xl font-medium">Restricted Access</span>
                      <h3 class="mb-5 text-lg font-normal text-gray-500">{message}</h3>
                      
                      <Link 
                        to='/login'
                        className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2 mx-4">
                            Go to Login
                      </Link>
                      <Link to='/' class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">No, cancel</Link>
                  </div>
              </div>
          </div>
      </div>
      // <div>
      //   <div class="w-full fixed top-0 left-0 z-[1] flex items-center justify-center h-screen">
      //     <div class="modal">

      //       <div class="modal__details">
      //         <h1 class="modal__title">Restricted Access</h1>
      //         <p class="modal__description">You have to login to access this page.</p>
      //       </div>

      //       <p class="modal__text">This is a members only website. 
      //         In order to access this resource you have to login. If you do not have an account, 
      //         you can register a new account which will be subject to approval by our team. 
      //         Thank you for visiting our page.</p>

      //       <a  class="modal__btn" href='/login'>Login &rarr;</a>

      //       {/* <a href="#modal-closed" class="link-2"></a> */}

      //     </div>
      //   </div>
      // </div>

  );
};

export default RedirectModal;
