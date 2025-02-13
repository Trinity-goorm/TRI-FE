import axios from "axios";

const TOKEN = localStorage.getItem("ACCESS_TOKEN");
const userString = localStorage.getItem("user");
const user = userString ? JSON.parse(userString) : null;

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + TOKEN,
    "User-Id": user ? user.id : null,
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    const originalRequest = config;

    if (status === 403) {
      const accessToken = localStorage.getItem("ACCESS_TOKEN");
      const refreshToken = localStorage.getItem("REFRESH_TOKEN");

      try {
        const { response } = await axios({
          method: "post",
          url: `http://localhost:8080/users/kakao/reissue`,
          data: { accessToken, refreshToken },
        });
        const newAccessToken = response.data.accessToken;
        const newRefreshToken = response.data.refreshToken;
        originalRequest.headers = {
          "Content-Type": "application/json",
          Authorization: "Bearer " + newAccessToken,
          "User-Id": user ? user.id : null,
        };
        localStorage.setItem("ACCESS_TOKEN", newAccessToken);
        localStorage.setItem("REFRESH_TOKEN", newRefreshToken);
        return await axios(originalRequest);
      } catch (err) {
        new Error(err);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
