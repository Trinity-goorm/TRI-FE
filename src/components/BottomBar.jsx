import * as style from "./style/BottomBar.js";
import { FaHome, FaUser, FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const BottomBar = () => {
    return (
        <style.BottomBarContainer>
            <style.BarContainer>
                <style.ButtonContainer>
                    <Link to="/" >
                        <FaHome size={33} color={"black"}/>
                    </Link>
                </style.ButtonContainer>
                <style.ButtonContainer>
                    <Link to="/mydining">
                        <FaCalendar size={27} color={"black"}/>
                    </Link>
                </style.ButtonContainer>
                <style.ButtonContainer>
                    <Link to="/mypage">
                        <FaUser size={27} color={"black"}/>
                    </Link>
                </style.ButtonContainer>
            </style.BarContainer>
        </style.BottomBarContainer>
    )
}

export default BottomBar;