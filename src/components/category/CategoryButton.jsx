import * as style from "./style/CategoryButton.js";
import { useNavigate } from "react-router-dom";

const CategoryButton = ({ id, image, name }) => {
  const nav = useNavigate();

  return (
    <style.TotalContainer
      onClick={() => nav(`/search/total/category?categoryId=${id}`)}
    >
      <style.ImageContainer>
        <style.Image src={image} alt={name} />
      </style.ImageContainer>
      <style.Title>{name}</style.Title>
    </style.TotalContainer>
  );
};
export default CategoryButton;
