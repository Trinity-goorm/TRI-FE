import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage.main.jsx";
import MyDiningPage from "./pages/mydining/MyDiningPage.main.jsx";
import MyPage from "./pages/mypage/MyPage.main.jsx";
import KakaoLogin from "./pages/login/KakaoLogin.jsx";
import KakaoCallback from "./pages/login/KakaoCallback.jsx";
import Onboarding from "./pages/onboarding/Onboarding.jsx";
import DetailPage from "./pages/detail/DetailPage.main.jsx";
import ReservationMainPage from "./pages/reservation/Reservation.modal.jsx";
import ReservationConfirm from "./pages/reservation/Reservation.modal.confirm.jsx";

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
        <Route path="/reservation/:id" element={<ReservationMainPage />} />
        <Route path="/reservation/confirm/:id" element={<ReservationConfirm />} />
      </Routes>
    </Router>
  );
}

export default App;
