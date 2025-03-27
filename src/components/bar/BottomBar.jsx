import * as style from "./style/BottomBar.js";
import {Link, useNavigate} from "react-router-dom";

const BottomBar = () => {

    const navigate = useNavigate();


    return (
        <style.BottomBarContainer>
            <style.BarContainer>
                <style.ButtonContainer data-testid="homeButton" onClick={() => navigate("/")}>
                    <span className="material-icons-outlined" style={{fontSize: "28px", color: "gray"}}>home</span>
                </style.ButtonContainer>
                <style.ButtonContainer data-testid="myDiningButton" onClick={() => navigate("/mydining")}>
                    <span className="material-icons-outlined" style={{fontSize: "25px", color: "gray"}}>calendar_today</span>
                </style.ButtonContainer>
                <style.ButtonContainer data-testid="myPageButton" onClick={() => navigate("/mypage")}>
                    {/*<GoPerson size={27} color={"gray"}/>*/}
                    <span className="material-icons-outlined" style={{fontSize: "30px", color: "gray"}}>person</span>
                </style.ButtonContainer>
            </style.BarContainer>
        </style.BottomBarContainer>
    )
}

export default BottomBar;