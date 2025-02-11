import * as style from "./style/TopBar.js";
import { GoSearch, GoBookmark } from "react-icons/go";

const TopBar = () => {
    return (
        <style.TopBarContainer>
            <style.Logo>
                C
            </style.Logo>
            <style.SearchBarContainer>
                <style.SearchBar>
                    <GoSearch size={22} color="gray"/>
                </style.SearchBar>
            </style.SearchBarContainer>
            <style.MovetoSaveButton>
                <GoBookmark size={30} color="gray"/>
            </style.MovetoSaveButton>
        </style.TopBarContainer>
    )
}

export default TopBar;