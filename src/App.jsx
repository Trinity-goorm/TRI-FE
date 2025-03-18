import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

// ✅ 전역 컴포넌트는 미리 로드 (초기 로딩 최적화)
import NotificationHandler from "./service/foregroundMessage.js";
import NotificationModal from "./components/modal/NotificationModal.jsx";

// ✅ 페이지별 코드 스플리팅 (lazy 로드)
const HomePage = lazy(() => import("./pages/home/HomePage.main.jsx"));
const MyDiningPage = lazy(() => import("./pages/mydining/MyDiningPage.main.jsx"));
const MyPage = lazy(() => import("./pages/mypage/MyPage.main.jsx"));
const ReservationMainPage = lazy(() => import("./pages/reservation/Reservation.modal.jsx"));
const ReservationConfirm = lazy(() => import("./pages/reservation/Reservation.modal.confirm.jsx"));
const KakaoLogin = lazy(() => import("./pages/auth/KakaoLogin.jsx"));
const KakaoCallback = lazy(() => import("./pages/auth/KakaoCallback.jsx"));
const Search = lazy(() => import("./pages/search/Search.jsx"));
const SearchCategoryTotal = lazy(() => import("./pages/search/SearchCategoryTotal.jsx"));
const SearchKeywordTotal = lazy(() => import("./pages/search/SearchKeywordTotal.jsx"));
const ReservationPaymentPage = lazy(() => import("./pages/reservation/Reservation.payment.jsx"));
const MyDiningReservation = lazy(() => import("./pages/mydining/MyDiningPage.reservation.jsx"));
const MyDiningVacancy = lazy(() => import("./pages/mydining/MyDiningPage.vacancy.jsx"));
const DetailPage = lazy(() => import("./pages/detail/DetailPage.main.jsx"));
const Onboarding = lazy(() => import("./pages/onboarding/Onboarding.jsx"));

function App() {
  return (
      <RecoilRoot>
        <Router>
          <NotificationHandler />
          <NotificationModal />

          {/* ✅ Suspense로 코드 스플리팅된 컴포넌트 감싸기 */}
          <Suspense fallback={<div>Loading...</div>}>
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
              <Route path="/mydining/reservation" element={<MyDiningReservation />} />
              <Route path="/mydining/vacancy" element={<MyDiningVacancy />} />
            </Routes>
          </Suspense>
        </Router>
      </RecoilRoot>
  );
}

export default App;
