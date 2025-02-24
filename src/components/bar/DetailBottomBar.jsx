import * as style from "./style/DetailBottomBar.js";
import { GoHome, GoCalendar, GoPerson} from "react-icons/go";
import { useNavigate } from "react-router-dom";
import SaveButton from "../save/SaveButton.jsx";
import ReservationButton from "../button/ReservationButton.jsx";

const DetailBottomBar = ({isSaved, restaurantId, onClickSave, openModal, wishCount}) => {

    const navigate = useNavigate();
    const onClickMove = () => {
        navigate(`/reservation/${restaurantId}`);
    }
    return (
        <style.BottomBarContainer>
            <style.SaveContainer onClick={onClickSave} >
                <SaveButton color={"white"} isLiked={isSaved} />
                <style.SaveCountContainer>
                    {wishCount}
                </style.SaveCountContainer>
            </style.SaveContainer>
            <style.RerservationButtonContainer onClick={openModal}>
                <ReservationButton  name={"예약하기"}  />
            </style.RerservationButtonContainer>
        </style.BottomBarContainer>
    )
}

export default DetailBottomBar;