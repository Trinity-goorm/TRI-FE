import * as style from "./style/CategoryButton.js";
import { useNavigate } from "react-router-dom";
import {useEffect, useRef} from "react";

const CategoryButton = ({ id, image, name }) => {
  const nav = useNavigate();
  const imgRef = useRef(null);

  useEffect(() => {
    const callback = (entries, observer) => {
      entries.forEach(entry => {

        if(entry.isIntersecting) {
          entry.target.src = entry.target.dataset.src;
          observer.unobserve(entry.target);
        }
      })
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3});
    requestAnimationFrame(() => {
      if (imgRef.current) observer.observe(imgRef.current);
    });
    return () => observer.disconnect();
  })

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
