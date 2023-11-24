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
    <div className="w-full fixed top-0 left-0 z-[999] bg-[#00000039] flex items-center justify-center h-screen">
            <div className="w-[95%] 800px:w-[40%] min-h-[20vh] bg-white rounded shadow p-5">
              <div className="w-full flex justify-end cursor-pointer">
              <RxCross1 size={25} onClick={handleClose} />
              </div>
              <h3 className="text-[25px] text-center py-5 font-Poppins text-[#000000cb]">
                {message}
              </h3>
              <div className="w-full flex items-center justify-center">
                <div
                  className={`${styles.button} text-white text-[18px] !h-[42px] mr-4`}
                  onClick={handleClose}
                >
                  cancel
                </div>
                <Link
                  to='/login'
                  className={`${styles.button} text-white text-[18px] !h-[42px] ml-4`}
                  onClick={handleConfirm}
                >
                  confirm
                </Link>
              </div>
            </div>
          </div>
    
  );
};

export default RedirectModal;
