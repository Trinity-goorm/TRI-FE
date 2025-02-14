import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage.main.jsx";
import MyDiningPage from "./pages/mydining/MyDiningPage.main.jsx";
import MyPage from "./pages/mypage/MyPage.main.jsx";
import KakaoLogin from "./pages/auth/KakaoLogin.jsx";
import KakaoCallback from "./pages/auth/KakaoCallback.jsx";
import OnboardingUserInfo from "./pages/onboarding/OnboardingUserInfo.jsx";
import OnboardingCategory from "./pages/onboarding/OnboardingCategory.jsx";
import OnboardingPrefPrice from "./pages/onboarding/OnboardingPrefPrice.jsx";
import DetailPage from "./pages/detail/DetailPage.main.jsx";
import SearchTotal from "./pages/search/SearchTotal.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<KakaoLogin />} />
        <Route path="/kakao/callback" element={<KakaoCallback />} />
        <Route path="/onboarding/1" element={<OnboardingUserInfo />} />
        <Route path="/onboarding/2" element={<OnboardingCategory />} />
        <Route path="/onboarding/3" element={<OnboardingPrefPrice />} />
        <Route path="/mydining" element={<MyDiningPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/searchTotal" element={<SearchTotal />} />
      </Routes>
    </Router>
  );
}

export default App;
