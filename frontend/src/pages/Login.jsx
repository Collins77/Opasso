import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Login from "../components/Login/Login.jsx";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, role } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) {
      if (role === 'Admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/');
      }
    }
  }, [isAuthenticated, role, navigate]);
  return (
    <div>
        <Login />
    </div>
  )
}

export default LoginPage;