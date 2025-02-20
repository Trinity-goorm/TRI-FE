import { useState, useEffect } from "react";
import styled from "styled-components";

const CategoryItem = ({
  id,
  image,
  name,
  addCategory,
  deleteCategory,
  isSelected,
}) => {
  const handleClickItem = () => {
    if (!isSelected) {
      addCategory(id);
    } else {
      deleteCategory(id);
    }
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
  width: 29%;
  height: 75px;
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
  transform: translate(-50%, -50%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  color: white;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 600;
  background: rgba(0, 0, 0, 0.4);
  padding: 34px 8px;
`;
