import { useState, useEffect } from "react";
import styled from "styled-components";

const CategoryItem = ({ id, image, name, addCategory, deleteCategory }) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (isSelected) {
      addCategory(id);
    } else {
      deleteCategory(id);
    }
  }, [isSelected]);

  const handleClickItem = () => {
    setIsSelected(!isSelected);
  };

  return (
    <TotalContainer onClick={handleClickItem} $isSelected={isSelected}>
      <ImageContainer>
        <Image src={image} alt={name} />
      </ImageContainer>
      <Title>{name}</Title>
    </TotalContainer>
  );
};
export default CategoryItem;

const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 85px;
  background-color: lightgray;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  margin: 5px;
  box-shadow: ${({ $isSelected }) =>
    $isSelected ? "0 0 0 3px #22b379" : "none"};
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  opacity: 0.7;
`;

const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; /* 텍스트가 긴 경우 중앙 유지 */
  text-align: center;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */

  color: white;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  background: rgba(0, 0, 0, 0.4);
  padding: 34px 8px;
`;
