import * as style from "./style/CategoryComponent.js"
import CategoryButton from "./CategoryButton.jsx";
import CategoryDummy from "../assets/dummydata/Category.js";

const CategoryComponent = () => {
    return (
        <style.TotalContainer>
            {CategoryDummy.map((item, index) => (
                    <CategoryButton key={index} image={item.image} name={item.name} />
            ))}
        </style.TotalContainer>
    )
}

export default CategoryComponent;