import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const PostOnboarding = async (
  sex,
  name,
  birthday,
  phoneNumber,
  minPrice,
  maxPrice,
  userPreferenceCategoryIdList,
  refreshToken,
  accessToken
) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/users/onboarding`,
      {
        sex,
        name,
        birthday,
        phoneNumber,
        minPrice,
        maxPrice,
        userPreferenceCategoryIdList,
      },
      {
        headers: {
          "Content-Type": "application/json",
          refresh: refreshToken,
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    console.log(response);
    return response;
  } catch (error) {
    console.error(
      "온보딩 정보 보내기 실패",
      error.response?.data || error.message
    );
    throw new Error("온보딩 정보 보내기 실패");
  }
};

export default PostOnboarding;
