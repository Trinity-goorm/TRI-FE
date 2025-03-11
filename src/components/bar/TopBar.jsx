import * as style from "./style/TopBar.js";
import { GoSearch, GoBookmark } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const nav = useNavigate();

  return (
    <style.TopBarContainer>
      <style.Logo>P</style.Logo>
      <style.SearchBarContainer role='goSearch' onClick={() => nav("/search")}>
        <style.SearchBar>
          <GoSearch size={22} color="gray" />
        </style.SearchBar>
      </style.SearchBarContainer>
      <style.MovetoSaveButton>
        <GoBookmark size={30} role="goSave" color="gray" onClick={() => nav("/mypage")}  />
      </style.MovetoSaveButton>
    </style.TopBarContainer>
  );
};

export default TopBar;
