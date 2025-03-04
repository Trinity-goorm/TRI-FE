import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const PostFcmRenew = async (fcmToken, accessToken) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/fcmTokens/renew`,
      {
        fcmToken,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response;
  } catch (error) {
    console.error("fcm 토큰 갱신 실패:", error.response?.data || error.message);
    throw new Error("fcm 토큰 갱신 실패");
  }
};
export default PostFcmRenew;
