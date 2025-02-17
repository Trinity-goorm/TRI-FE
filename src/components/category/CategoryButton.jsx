import * as style from "./style/CategoryButton.js"
const CategoryButton = ({image, name}) => {
    return (
        <style.TotalContainer>
            <style.ImageContainer>
                <style.Image src={image} alt={name} />
            </style.ImageContainer>
            <style.Title>
                {name}
            </style.Title>
        </style.TotalContainer>
    )
}
export default CategoryButton;