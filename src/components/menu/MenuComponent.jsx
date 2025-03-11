import * as style from "./style/MenuComponent.js"

const MenuComponent = ({name, price, ...props}) => {

    return (
        <style.MenuContainer {...props}>
            <style.InfoContainer>
                <style.TitleContainer data-testid="menuTitle">
                    {name}
                </style.TitleContainer>
                <style.PriceContainer>
                    {price.toLocaleString()}원
                </style.PriceContainer>
            </style.InfoContainer>
        </style.MenuContainer>
    )
}
export default MenuComponent;