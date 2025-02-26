import * as style from "./style/SaveButton.js";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

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
    <style.ButtonContainer width={width} height={height} border={border}>
      {isLiked ? (
        <FaBookmark size={size ? size : 23} color={"#FF6868"} />
      ) : (
        <FaRegBookmark size={size ? size : 23} color={iconcolor} />
      )}
    </style.ButtonContainer>
  );
};
export default SaveButton;
