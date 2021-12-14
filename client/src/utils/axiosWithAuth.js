import Axios from "axios";

const axiosWithAuth = () => {
  const token = sessionStorage.getItem("token");

  return Axios.create({
    baseURL: "https://chiefs0.herokuapp.com/",
    headers: {
      authorization: token,
    },
  });
};

export default axiosWithAuth;
