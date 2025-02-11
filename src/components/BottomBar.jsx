import * as style from "./style/BottomBar.js";
import { GoHome, GoCalendar, GoPerson} from "react-icons/go";
import { Link } from "react-router-dom";

const BottomBar = () => {
    return (
        <style.BottomBarContainer>
            <style.BarContainer>
                <style.ButtonContainer>
                    <Link to="/" >
                        <GoHome size={28} color={"gray"}/>
                    </Link>
                </style.ButtonContainer>
                <style.ButtonContainer>
                    <Link to="/mydining">
                        <GoCalendar size={27} color={"gray"}/>
                    </Link>
                </style.ButtonContainer>
                <style.ButtonContainer>
                    <Link to="/mypage">
                        <GoPerson size={27} color={"gray"}/>
                    </Link>
                </style.ButtonContainer>
            </style.BarContainer>
        </style.BottomBarContainer>
    )
}

export default BottomBar;