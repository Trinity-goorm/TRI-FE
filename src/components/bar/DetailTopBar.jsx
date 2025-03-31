import * as style from "./style/DetailTopBar.js";
import {useNavigate} from "react-router-dom";
import SaveButton from "../save/SaveButton.jsx";
import useLike from "../../hooks/useLike.js";
import { useScroll } from "../../context/ScrollContext.jsx";

import { useLikeContext } from "../../context/LikeContext.jsx";

// eslint-disable-next-line react/prop-types
const DetailTopBar = ({name, id, wishCount, ...props}) => {
    const { isScrolled } = useScroll();
    const nav = useNavigate();
    const {isSaved, handleLike}  =  useLikeContext();

    return (
        <style.TopBarContainer isScroll = {isScrolled}>
            <style.ReturnButtonContainer onClick={() => {
                nav(-1)
            }}>
                <span className="material-icons" style={{fontSize: "22px", color: "black"}}>arrow_back</span>
            </style.ReturnButtonContainer>
            <style.HomeButtonContainer onClick={() => {
                nav("/")
            }}>
                <span className="material-icons-outlined" style={{fontSize: "23px" , color: "black"}} >home</span>
            </style.HomeButtonContainer>
            <style.TitleContainer data-testid="detail-topbar-name">
                {isScrolled ? name : null}
            </style.TitleContainer>
            <style.SaveButtonContainer onClick={() => handleLike(id)}>
                <SaveButton color={"white"} iconcolor={"black"} width={"35px"} height={"35px"} size={24} isLiked={isSaved}/>

            </style.SaveButtonContainer>
        </style.TopBarContainer>
    )
}
export default DetailTopBar;
