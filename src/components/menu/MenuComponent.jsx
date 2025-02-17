import * as style from "./style/MenuComponent.js"

const MenuComponent = ({name, price}) => {

    return (
        <style.MenuContainer>
            <style.InfoContainer>
                <style.TitleContainer>
                    {name}
                </style.TitleContainer>
                <style.PriceContainer>
                    {price}원
                </style.PriceContainer>
            </style.InfoContainer>
        </style.MenuContainer>
    )
}
export default MenuComponent;