import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { isBrowser } from 'react-device-detect';
import { useRecoilState} from "recoil";

/*Browser Pages*/
import BrowserMainPage from "./pages/BrowserPages/BrowserMainPage";
import BrowserAboutPage from "./pages/BrowserPages/BrowserAboutPage";
import BrowserTodaystockPage from "./pages/BrowserPages/BrowserTodaystockPage";
import BrowserPortpolioPage from "./pages/BrowserPages/BrowserPortpolioPage";
import BrowserLoginPage from "./pages/BrowserPages/BrowserLoginPage";
import BrowserBackTestPage from "./pages/BrowserPages/BrowserBackTestPage";
import BrowserBackTestResultPage from "./pages/BrowserPages/BrowserBackTestResultPage";
/*Tablet Pages*/
import MobileMainPage from "./pages/MobilePages/MobileMainPage";


import { isLoggedInState } from "./atoms/LoginAtom";





function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  const renderItems = () => {
    if(isBrowser) {
      return(
        <Routes>
          <Route path="/" element={<BrowserMainPage/>} />
          <Route path="/about" element={<BrowserAboutPage/>} />
          <Route path="/todaystock" element={<BrowserTodaystockPage/>} />
          <Route path="/backtest" element={<BrowserBackTestPage/>}/>
          <Route path="/result" element={<BrowserBackTestResultPage />} />
          <Route path="/portpolio" element={isLoggedIn ? <BrowserPortpolioPage/> : <Navigate replace to="/" />} />
          <Route path="/login" element={isLoggedIn ? <Navigate replace to="/" /> : <BrowserLoginPage/>} />
        </Routes>
      )
    }
      return(
        <Routes>
          <Route path="/" element={<MobileMainPage/>} />
        </Routes>
      )
  };



  return (
    <BrowserRouter>
      {renderItems()}
    </BrowserRouter>
  );
}

export default AppRouter;
