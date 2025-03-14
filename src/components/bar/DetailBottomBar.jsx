import * as style from './style/DetailBottomBar.js';
import { GoHome, GoCalendar, GoPerson } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import SaveButton from '../save/SaveButton.jsx';
import ReservationButton from '../button/ReservationButton.jsx';

const DetailBottomBar = ({
  isSaved,
  restaurantId,
  onClickSave,
  openModal,
  wishCount,
  ...props
}) => {
  const navigate = useNavigate();
  const onClickMove = () => {
    navigate(`/reservation/${restaurantId}`);
  };
  return (
    <style.BottomBarContainer {...props}>
      <style.SaveContainer onClick={onClickSave} data-testid='likeButton'>
        <SaveButton color={'white'} isLiked={isSaved} />
        <style.SaveCountContainer data-testid='likeCount'>
          {wishCount}
        </style.SaveCountContainer>
      </style.SaveContainer>
      <style.RerservationButtonContainer
        onClick={openModal}
        data-testid='reservationButton'
      >
        <ReservationButton name={'예약하기'} />
      </style.RerservationButtonContainer>
    </style.BottomBarContainer>
  );
};

export default DetailBottomBar;
