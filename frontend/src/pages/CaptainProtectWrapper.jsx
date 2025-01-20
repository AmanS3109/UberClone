import React, { useEffect } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainProtectWrapper = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {

    if (!token) {
      navigate('/captain-login');
    }
  }, [token, navigate]); // Add dependencies


  axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      setIsLoading(false);
    }
  }).catch((error) => {
    console.error("Error during fetching captain profile:", error);
    localStorage.removeItem('token');
    navigate('/captain-login');
  });

  if (isLoading) {
    return <div>Loading...</div>
  }

  // Render children only if the token exists
  return token ? <>{children}</> : null;
};

export default CaptainProtectWrapper;