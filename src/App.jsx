import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage.main.jsx";
import MyDiningPage from "./pages/mydining/MyDiningPage.main.jsx";
import MyPage from "./pages/mypage/MyPage.main.jsx";
import KakaoLogin from "./pages/login/KakaoLogin.jsx";
import KakaoCallback from "./pages/login/KakaoCallback.jsx";
import Onboarding from "./pages/onboarding/Onboarding.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<KakaoLogin />} />
        <Route path="/auth/kakao/callback" element={<KakaoCallback />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/mydining" element={<MyDiningPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
