import axios from "axios";

const API_URL = `${process.env.REACT_APP_PROXY}/api/v1/auth/`;

const register = async (userData) => {
  const response = await axios.post(API_URL + "reg", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("user");
};
const authService = {
  register,
  login,
  logout,
};

export default authService;
