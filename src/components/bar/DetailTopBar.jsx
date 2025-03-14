import * as style from "./style/DetailTopBar.js";
import {useNavigate} from "react-router-dom";
import SaveButton from "../save/SaveButton.jsx";
import useLike from "../../hooks/useLike.js";

// eslint-disable-next-line react/prop-types
const DetailTopBar = ({name, isScrolled, id, wishCount, ...props}) => {
    const nav = useNavigate();
    const { likeCount, isSaved, handleLike } = useLike(id, wishCount);

    return (
        <style.TopBarContainer>
            <style.ReturnButtonContainer onClick={() => {
                nav(-1)
            }}>
                <span className="material-icons" style={{fontSize: "22px", color: "black"}}>arrow_back</span>
            </style.ReturnButtonContainer>
            <style.HomeButtonContainer onClick={() => {
                nav("/")
            }}>
                <span className="material-symbols-outlined" style={{fontSize: "23px" , color: "black"}} >home</span>
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