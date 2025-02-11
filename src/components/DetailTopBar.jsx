import * as style from "./style/DetailTopBar.js";
import {GoArrowLeft, GoHome, GoBookmark} from "react-icons/go";

// eslint-disable-next-line react/prop-types
const DetailTopBar = ({name, isScrolled}) => {

    return (
        <style.TopBarContainer>
            <style.ReturnButtonContainer>
                <GoArrowLeft size={22} color="black"/>
            </style.ReturnButtonContainer>
            <style.HomeButtonContainer>
                <GoHome size={22} color="black"/>
            </style.HomeButtonContainer>
            <style.TitleContainer>
                {isScrolled ? null : name}
            </style.TitleContainer>
            <style.SaveButtonContainer>
                <GoBookmark size={22} color="black"/>
            </style.SaveButtonContainer>
        </style.TopBarContainer>
    )
}
export default DetailTopBar;