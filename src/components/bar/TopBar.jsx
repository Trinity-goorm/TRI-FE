import * as style from "./style/TopBar.js";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const nav = useNavigate();

  return (
    <style.TopBarContainer>
      <style.Logo>P</style.Logo>
      <style.SearchBarContainer role='goSearch' onClick={() => nav("/search")}>
        <style.SearchBar>
            <span class="material-icons" style={{ fontSize: "25px", color: "gray" }} >search</span>
        </style.SearchBar>
      </style.SearchBarContainer>
      <style.MovetoSaveButton>

      </style.MovetoSaveButton>
    </style.TopBarContainer>
  );
};

export default TopBar;
