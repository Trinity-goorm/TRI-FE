import requestHandler from "../requestHandler";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const PostLogout = async (accessToken, fcmToken) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/users/kakao/logout`,
      { fcmToken },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("로그아웃 실패", error);
    throw error;
  }
};

export default PostLogout;
