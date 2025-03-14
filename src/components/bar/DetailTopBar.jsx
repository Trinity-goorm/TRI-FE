import * as style from './style/DetailTopBar.js';
import { useNavigate } from 'react-router-dom';
import SaveButton from '../save/SaveButton.jsx';
//import {GoArrowLeft, GoHome, GoBookmark} from "react-icons/go";
import useLike from '../../hooks/useLike.js';

// eslint-disable-next-line react/prop-types
const DetailTopBar = ({ name, isScrolled, id, wishCount, ...props }) => {
  const nav = useNavigate();
  const { likeCount, isSaved, handleLike } = useLike(id, wishCount);

  return (
    <style.TopBarContainer>
      <style.ReturnButtonContainer
        onClick={() => {
          nav(-1);
        }}
      >
        {/*
                <GoArrowLeft size={22} color="black"/>
                */}
      </style.ReturnButtonContainer>
      <style.HomeButtonContainer
        onClick={() => {
          nav('/');
        }}
      >
        {/*
                 <GoHome size={22} color="black"/>
                */}
      </style.HomeButtonContainer>
      <style.TitleContainer data-testid='detail-topbar-name'>
        {isScrolled ? name : null}
      </style.TitleContainer>
      <style.SaveButtonContainer onClick={() => handleLike(id)}>
        {/*
                <SaveButton color={"white"} width={"35px"} height={"35px"} size={20} isLiked={isSaved}/>
                */}
      </style.SaveButtonContainer>
    </style.TopBarContainer>
  );
};
export default DetailTopBar;
