import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import RedirectModal from "../components/RedirectModal/RedirectModal";

const ProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  if (loading === false) {
    if (!isAuthenticated) {
      // return <Navigate to="/login" replace />;
      return <RedirectModal />
    }
    return children;
  }
};

export default ProtectedRoute;
