import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const DeleteFcmToken = async (fcmToken, accessToken) => {
  try {
    const response = await axios.delete(`${BASE_URL}/api/fcmTokens/delete`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        "Fcm-Token": fcmToken, 
      },
    });

    return response;
  } catch (error) {
    console.error("FCM 토큰 삭제 실패:", error.response?.data || error.message);
    throw new Error("FCM 토큰 삭제 실패");
  }
};

export default DeleteFcmToken;
