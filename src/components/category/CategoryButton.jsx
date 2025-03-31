import * as style from "./style/CategoryButton.js";
import { useNavigate } from "react-router-dom";
//hooks
import useInView from "../../hooks/useInView.js";

const CategoryButton = ({ id, image, name }) => {
  const nav = useNavigate();
  const imgRef = useInView((entries, observer)=>{
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target);
      }
    });
  },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      }
  );

  return (
    <style.TotalContainer
      onClick={() => nav(`/search/total/category?categoryId=${id}`)}
    >
      <style.ImageContainer>
        <style.Image data-src={image} alt={name} ref={imgRef} />
      </style.ImageContainer>
      <style.Title>{name}</style.Title>
    </style.TotalContainer>
  );
};
export default CategoryButton;
