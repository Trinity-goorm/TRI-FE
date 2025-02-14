import * as style from "./style/DetailTopBar.js";
import {useNavigate} from "react-router-dom";
import SaveButton from "../save/SaveButton.jsx";
import {GoArrowLeft, GoHome, GoBookmark} from "react-icons/go";

// eslint-disable-next-line react/prop-types
const DetailTopBar = ({name, isScrolled, isSaved}) => {
    const nav = useNavigate();

    return (
        <style.TopBarContainer>
            <style.ReturnButtonContainer onClick={() => {nav(-1)}}>
                <GoArrowLeft size={22} color="black"/>
            </style.ReturnButtonContainer>
            <style.HomeButtonContainer onClick={()=>{nav("/")}}>
                <GoHome size={22} color="black"/>
            </style.HomeButtonContainer>
            <style.TitleContainer>
                {isScrolled ? name : null}
            </style.TitleContainer>
            <style.SaveButtonContainer>
                <SaveButton color={"white"} width={"35px"} height={"35px"} size={20} isClick={isSaved}/>
            </style.SaveButtonContainer>
        </style.TopBarContainer>
    )
}
export default DetailTopBar;