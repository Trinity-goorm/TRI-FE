import * as style from "./style/HomePage.main.js"
import TopBar from "../../components/TopBar.jsx";
import BottomBar from "../../components/BottomBar.jsx";

const HomePage = () => {
    return (
        <style.TotalContainer>
            <style.TopBarContainer>
                <TopBar />
            </style.TopBarContainer>
            <style.InnerContainer>
            </style.InnerContainer>
            <style.BottomBarContainer>
                <BottomBar />
            </style.BottomBarContainer>
        </style.TotalContainer>
    )
}
export default HomePage;