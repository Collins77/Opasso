import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  if (loading === false) {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return children;
  }
};

export default ProtectedRoute;
// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
// import RedirectModal from "../components/RedirectModal/RedirectModal";
// // import {RedirectModal from "../components/RedirectModal/RedirectModal";
// // import Modal from "./Modal"; // Adjust the path based on your project structure

// const ProtectedRoute = ({ children }) => {
//   const { loading, isAuthenticated } = useSelector((state) => state.user);
//   const [showRedirectModal, setShowRedirectModal] = useState(false);

//   const handleRedirect = () => {
//     if (!isAuthenticated) {
//       // Show the RedirectModal with a message
//       setShowRedirectModal(true);
//       return;
//     }
//   };

//   // if (loading) {
//   //   // Optionally, you can show a loading indicator here
//   //   return null;
//   // }

//   // if (!isAuthenticated) {
//   //   return (
//   //     <>
//   //       <RedirectModal
//   //         isOpen={showRedirectModal}
//   //         onClose={() => setShowRedirectModal(false)}
//   //         message="This is a members-only page. Please log in to access."
//   //       />
//   //       <Navigate to="/login" replace />;
//   //     </>
//   //   );
//   // }

  
// };

// export default ProtectedRoute;

