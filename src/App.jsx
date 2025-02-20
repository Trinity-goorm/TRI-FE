import "./App.css";
import { useEffect } from "react";
import { setupMessageListener } from "./service/foregroundMessage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage.main.jsx";
import MyDiningPage from "./pages/mydining/MyDiningPage.main.jsx";
import MyPage from "./pages/mypage/MyPage.main.jsx";
import ReservationMainPage from "./pages/reservation/Reservation.modal.jsx";
import ReservationConfirm from "./pages/reservation/Reservation.modal.confirm.jsx";
import KakaoLogin from "./pages/auth/KakaoLogin.jsx";
import KakaoCallback from "./pages/auth/KakaoCallback.jsx";
import Search from "./pages/search/Search.jsx";
import SearchTotal from "./pages/search/SearchTotal.jsx";
import ReservationPaymentPage from "./pages/reservation/Reservation.payment.jsx";
import DetailPage from "./pages/detail/DetailPage.main.jsx";
import Onboarding from "./pages/onboarding/Onboarding.jsx";

function App() {
  useEffect(() => {
    setupMessageListener();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<KakaoLogin />} />
        <Route path="/kakao/callback" element={<KakaoCallback />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/mydining" element={<MyDiningPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/total" element={<SearchTotal />} />
        <Route path="/reservation/:id" element={<ReservationMainPage />} />
        <Route
          path="/reservation/confirm/:id"
          element={<ReservationConfirm />}
        />
        <Route
          path="/reservation/payment"
          element={<ReservationPaymentPage />}
        />
        <Route
          path="/reservation/confirm/:id"
          element={<ReservationConfirm />}
        />
        <Route
          path="/reservation/payment"
          element={<ReservationPaymentPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
