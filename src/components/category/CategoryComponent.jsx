import * as style from "./style/CategoryComponent.js";
import FoodCategoryButton from "./FoodCategoryButton.jsx";
import CategoryButton from "./CategoryButton.jsx";
import Category from "../../assets/dummydata/Category.js";

const CategoryComponent = () => {
  return (
    <style.TotalContainer>
      {Category.map((item, index) => (
        <CategoryButton
          key={index}
          id={item.id}
          image={item.image}
          name={item.name}
        />
      ))}
    </style.TotalContainer>
  );
};

export default CategoryComponent;
