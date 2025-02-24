import "./App.css";
import { useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userState } from "./atoms/userState.js";
import GetUserDetail from "./api/userInfo/GetUserDetail.js";
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
import SearchCategoryTotal from "./pages/search/SearchCategoryTotal.jsx";
import SearchKeywordTotal from "./pages/search/SearchKeywordTotal.jsx";
import ReservationPaymentPage from "./pages/reservation/Reservation.payment.jsx";
import MyDiningReservation from "./pages/mydining/MyDiningPage.reservation.jsx";
import MyDiningVacancy from "./pages/mydining/MyDiningPage.vacancy.jsx";
import DetailPage from "./pages/detail/DetailPage.main.jsx";
import Onboarding from "./pages/onboarding/Onboarding.jsx";
import Modal from "./components/modal/Modal.jsx";

function App() {
  const nav = useNavigate();
  const setUser = useSetRecoilState(userState);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  // 초기 세팅
  useEffect(() => {
    setupMessageListener();
    const userId = localStorage.getItem("userId");

    if (userId) {
      getUserInfo(userId).then(() => setIsDataLoaded(true));
    } else {
      nav("/login");
    }
  }, []);

  const getUserInfo = async (userId) => {
    try {
      const response = await GetUserDetail(userId);
      setUser({
        userId: response.userId,
        userName: response.username,
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (!isDataLoaded) {
    return <div>로딩 중...</div>;
  }

  return (
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
      <Route path="/search/total/category" element={<SearchCategoryTotal />} />
      <Route path="/search/total" element={<SearchKeywordTotal />} />
      <Route path="/reservation/:id" element={<ReservationMainPage />} />
      <Route path="/reservation/confirm/:id" element={<ReservationConfirm />} />
      <Route path="/reservation/payment" element={<ReservationPaymentPage />} />
      <Route path="/mydining" element={<MyDiningPage />} />
      <Route path="/mydining/reservation" element={<MyDiningReservation />} />
      <Route path="/mydining/vacancy" element={<MyDiningVacancy />} />
    </Routes>
  );
}

export default App;
