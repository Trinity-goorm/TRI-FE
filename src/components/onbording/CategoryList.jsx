import CategoryDummy from "../../assets/dummydata/Category.js";
import CategoryItem from "./CategoryItem.jsx";
import styled from "styled-components";
import { useState, useRef } from "react";

const CategoryList = ({ addCategory, deleteCategory }) => {
  return (
    <CategoryContainer>
      {CategoryDummy.map((item, index) => (
        <CategoryItem
          key={index}
          id={index}
          image={item.image}
          name={item.name}
          addCategory={addCategory}
          deleteCategory={deleteCategory}
        />
      ))}
    </CategoryContainer>
  );
};

const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3px;
`;

export default CategoryList;
