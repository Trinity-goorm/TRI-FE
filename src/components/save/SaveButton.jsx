import * as style from "./style/SaveButton.js";
// import { FaBookmark, FaRegBookmark } from "react-icons/fa";

const SaveButton = ({
                      color,
                      width,
                      height,
                      size,
                      border,
                      iconcolor,
                      isLiked,
                    }) => {
  return (
      <style.ButtonContainer role="button" width={width} height={height} border={border}>
        {/* 아이콘 사용을 비활성화한 상태 */}
        {isLiked ? (
            <></>
        ) : (
            <></>
        )}
      </style.ButtonContainer>
  );
};

export default SaveButton;