import CategoryDummy from "../../assets/dummydata/Category.js";
import CategoryItem from "./CategoryItem.jsx";
import styled from "styled-components";

const CategoryList = ({ category, setCategory }) => {
  const handleAddCategory = (id) => {
    if (!category.includes(id)) {
      setCategory((prevCategory) => [...prevCategory, id]);
    }
  };

  const handleDeleteCategory = (id) => {
    setCategory((prevCategory) => prevCategory.filter((item) => item !== id));
  };

  return (
    <CategoryContainer>
      <CategoryListContainer>
        {CategoryDummy.map((item, index) => (
          <CategoryItem
            key={index}
            id={index}
            image={item.image}
            name={item.name}
            addCategory={handleAddCategory}
            deleteCategory={handleDeleteCategory}
            isSelected={category.includes(index)}
          />
        ))}
      </CategoryListContainer>
    </CategoryContainer>
  );
};

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryListContainer = styled.div`
  max-width: 320px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
`;

export default CategoryList;
