import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { isMobile } from 'react-device-detect';
import { useRecoilState} from "recoil";

/*Browser Pages*/
import BrowserMainPage from "./pages/BrowserPages/BrowserMainPage";
import BrowserAboutPage from "./pages/BrowserPages/BrowserAboutPage";
import BrowserTodaystockPage from "./pages/BrowserPages/BrowserTodaystockPage";
import BrowserLoginPage from "./pages/BrowserPages/BrowserLoginPage";
import BrowserBackTestPage from "./pages/BrowserPages/BrowserBackTestPage";
import BrowserBackTestResultPage from "./pages/BrowserPages/BrowserBackTestResultPage";
import BrowserPortoilio from "./pages/BrowserPages/BrowserPortpolio/BrowserPortpolioPage";
import DashboardApp from "./pages/BrowserPages/BrowserPortpolio/DashboardApp";
import BrowserPortpolioAccount from "./pages/BrowserPages/BrowserPortpolio/BrowserPortpolioAccount";
import BrowserPortpolioTransaction from "./pages/BrowserPages/BrowserPortpolio/BrowserPortpolioTransaction";

/*Mobile Pages*/
import MobilePage from "./pages/MobilePages/MobilePage";
import MobileMainPage from "./pages/MobilePages/MobileMainPage";
import MobileAboutPage from "./pages/MobilePages/MobileAboutPage";
import MobileTodayPickPage from "./pages/MobilePages/MobileTodayPickPage";
import MobileBackTestPage from "./pages/MobilePages/MobileBackTestPage";
import MobileLoginPage from "./pages/MobilePages/MobileLoginPage";


import { isLoggedInState } from "./atoms/LoginAtom";
import {isClicked} from "./atoms/ButtonAtom";





function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [isClick, setIsClick] = useRecoilState(isClicked);

  const renderItems = () => {
    if(isMobile) {
      return(
        <Routes>
          <Route path="/" element={<MobilePage/>}> 
            <Route path="/" element={<MobileMainPage/>} />
            <Route path="about" element={<MobileAboutPage/>} />
            <Route path="todaystock" element={<MobileTodayPickPage/>} />
            <Route path="backtest" element={<MobileBackTestPage/>} />
            <Route path="dashboard" element={isLoggedIn? <DashboardApp/> : <Navigate replace to="/login" />} />
            <Route path="account" element={isLoggedIn? <BrowserPortpolioAccount/> : <Navigate replace to="/login" />} />
            <Route path="transaction" element={isLoggedIn? <BrowserPortpolioTransaction/> : <Navigate replace to="/login" />} />
          </Route>
          <Route path="/login" element={isLoggedIn ? <Navigate replace to="/" /> : <MobileLoginPage/>} />
        </Routes>
      ) 
    }


    return(
      <Routes>
        <Route path="/" element={<BrowserMainPage/>} />
        <Route path="/about" element={<BrowserAboutPage/>} />
        <Route path="/todaystock" element={<BrowserTodaystockPage/>} />
        <Route path="/backtest" element={<BrowserBackTestPage/>}/>
        <Route path="/result" element={<BrowserBackTestResultPage />} />
        <Route path="/portpolio" element={isLoggedIn ? <BrowserPortoilio/> : <Navigate replace to="/login" />} >
          <Route path="main" element={<DashboardApp/>} />
          <Route path="account" element={<BrowserPortpolioAccount/>} />
          <Route path="transaction" element={<BrowserPortpolioTransaction/>} />
        </Route>
        
          
        
        <Route path="/login" element={isLoggedIn ? <Navigate replace to="/" /> : <BrowserLoginPage/>} />
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
