import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      } catch (error) {
        console.error("Logout failed:", error);
        if (error.response) {
          console.error("Error response:", error.response.data);
        }
      }
    };

    logout();
  }, [token, navigate]);

  return <div>Logging out...</div>;
};

export default UserLogout;
