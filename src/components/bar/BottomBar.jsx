import * as style from './style/BottomBar.js';
import { GoHome, GoCalendar, GoPerson } from 'react-icons/go';
import { Link, useNavigate } from 'react-router-dom';

const BottomBar = () => {
  const navigate = useNavigate();

  return (
    <style.BottomBarContainer>
      <style.BarContainer>
        <style.ButtonContainer
          data-testid='homeButton'
          onClick={() => navigate('/')}
        >
          <GoHome size={28} color={'gray'} />
        </style.ButtonContainer>
        <style.ButtonContainer
          data-testid='myDiningButton'
          onClick={() => navigate('/mydining')}
        >
          <GoCalendar size={27} color={'gray'} />
        </style.ButtonContainer>
        <style.ButtonContainer
          data-testid='myPageButton'
          onClick={() => navigate('/mypage')}
        >
          <GoPerson size={27} color={'gray'} />
        </style.ButtonContainer>
      </style.BarContainer>
    </style.BottomBarContainer>
  );
};

export default BottomBar;
