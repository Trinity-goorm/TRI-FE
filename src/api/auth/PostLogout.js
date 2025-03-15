import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const PostLogout = async (refreshToken) => {
  console.log("PostLogout", refreshToken);
  try {
    const response = await axios.post(`${BASE_URL}/logout`, null, {
      headers: {
        refresh: refreshToken,
      },
    });
    return response.data;
  } catch (error) {
    console.error("로그아웃 실패", error);
    throw error;
  }
};

export default PostLogout;
