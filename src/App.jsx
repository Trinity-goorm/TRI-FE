import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage.main.jsx";
import MyDiningPage from "./pages/mydining/MyDiningPage.main.jsx";
import MyPage from "./pages/mypage/MyPage.main.jsx";

function App() {

  return (
      <Router>
          <Routes>
              <Route path="*" element={<HomePage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/mydining" element={<MyDiningPage />} />
              <Route path="/mypage" element={<MyPage />} />

          </Routes>
      </Router>
  )
}

export default App
