import { BrowserRouter, Route, Routes } from "react-router-dom";
import { isBrowser } from 'react-device-detect';

/*Browser Pages*/
import BrowserMainPage from "./pages/BrowserPages/BrowserMainPage";
import BrowserAboutPage from "./pages/BrowserPages/BrowserAboutPage";
import BrowserTodaystockPage from "./pages/BrowserPages/BrowserTodaystockPage";
import BrowserPortpolioPage from "./pages/BrowserPages/BrowserPortpolioPage";
import BrowserLoginPage from "./pages/BrowserPages/BrowserLoginPage";

/*Tablet Pages*/
import MobileMainPage from "./pages/MobilePages/MobileMainPage";


const renderItems = () => {
  if(isBrowser) {
    return(
      <Routes>
        <Route path="/" element={<BrowserMainPage/>} />
        <Route path="/about" element={<BrowserAboutPage/>} />
        <Route path="/todaystock" element={<BrowserTodaystockPage/>} />
        <Route path="/portpolio" element={<BrowserPortpolioPage/>} />
        <Route path="/login" element={<BrowserLoginPage/>} />
      </Routes>
    )
  }
    return(
      <Routes>
        <Route path="/" element={<MobileMainPage/>} />
      </Routes>
    )
}



function AppRouter() {
  return (
    <BrowserRouter>
      {renderItems()}
    </BrowserRouter>
  );
}

export default AppRouter;
