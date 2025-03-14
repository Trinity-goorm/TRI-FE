import * as style from "./style/DetailBottomBar.js";
import { useNavigate } from "react-router-dom";
import SaveButton from "../save/SaveButton.jsx";
import ReservationButton from "../button/ReservationButton.jsx";
import useLike from "../../hooks/useLike.js";

const DetailBottomBar = ({id, wishCount, openModal, closeModal, ...props}) => {

    const navigate = useNavigate();
    const onClickMove = () => {
        navigate(`/reservation/${restaurantId}`);
    };

    const { likeCount, isSaved, handleLike } = useLike(id, wishCount);
    return (
        <style.BottomBarContainer {...props}>
            <style.SaveContainer onClick={() => handleLike(id)} data-testid="likeButton">
                <SaveButton color={"white"} isLiked={isSaved} size={28} />
                <style.SaveCountContainer data-testid="likeCount">
                    {likeCount}
                </style.SaveCountContainer>
            </style.SaveContainer>
            <style.RerservationButtonContainer onClick={openModal} data-testid='reservationButton'>
                <ReservationButton  name={"예약하기"}  />
            </style.RerservationButtonContainer>
        </style.BottomBarContainer>
    )
}

export default DetailBottomBar;