import * as style from "./style/HomePage.main.js";
import TopBar from "../../components/bar/TopBar.jsx";
import BottomBar from "../../components/bar/BottomBar.jsx";
import CategoryComponent from "../../components/category/CategoryComponent.jsx";
import RecommendComponent from "./RecommendList.main.jsx";
import Banner from "../../components/banner/Banner.jsx";
import ProfileComponent from "../../components/search/ProfilerTableLogWrapper.jsx";

const HomePage = () => {
  return (

          <style.TotalContainer>
              <style.TopBarContainer>
                  <TopBar/>
              </style.TopBarContainer>
              <style.InnerContainer>
                  <style.BannerContainer>
                      <Banner/>
                  </style.BannerContainer>
                  <style.RecommendContainer>
                      <ProfileComponent>
                          <RecommendComponent/>
                      </ProfileComponent>
                  </style.RecommendContainer>
                  <style.CategoryContainer>
                      <CategoryComponent/>
                  </style.CategoryContainer>
              </style.InnerContainer>
              <style.BottomBarContainer>
                  <BottomBar/>
              </style.BottomBarContainer>
          </style.TotalContainer>

  );
};
export default HomePage;
