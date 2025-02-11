import * as style from "./style/HomePage.main.js"
import TopBar from "../../components/TopBar.jsx";
import BottomBar from "../../components/BottomBar.jsx";
import CategoryComponent from "../../components/CategoryComponent.jsx";
import RecommendComponent from "../home/RecommendComponet.main.jsx";
import Banner from "../../components/Banner.jsx";


const HomePage = () => {
    return (
        <style.TotalContainer>
            <style.TopBarContainer>
                <TopBar />
            </style.TopBarContainer>
            <style.InnerContainer>
                <style.BannerContainer>
                    <Banner/>
                </style.BannerContainer>
                <style.RecommendContainer>
                    <RecommendComponent/>
                </style.RecommendContainer>
                <style.CategoryContainer>
                    <CategoryComponent/>
                </style.CategoryContainer>
            </style.InnerContainer>
            <style.BottomBarContainer>
                <BottomBar/>
            </style.BottomBarContainer>
        </style.TotalContainer>
    )
}
export default HomePage;