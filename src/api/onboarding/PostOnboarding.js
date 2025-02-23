import requestHandler from "../requestHandler";

const PostOnboarding = (
  userId,
  sex,
  birthday,
  phoneNumber,
  minPrice,
  maxPrice,
  userPreferenceCategoryIdList
) => {
  return requestHandler({
    method: "POST",
    endpoint: "/users/onboarding",
    data: {
      userId,
      sex,
      birthday,
      phoneNumber,
      minPrice,
      maxPrice,
      userPreferenceCategoryIdList,
    },
    successMessage: "온보딩 정보 보내기 성공",
    errorMessage: "온보딩 정보 보내기 실패",
  });
};

export default PostOnboarding;
