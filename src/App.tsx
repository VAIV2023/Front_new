import './App.css';
import GlobalStyles from './GlobalStyled';
import AppRouter from "./AppRouter";
import { RecoilRoot } from "recoil";
import ThemeProvider from "./theme";

function App() {
  return (
    <>
      <GlobalStyles/>
      <ThemeProvider>
        <RecoilRoot>
          <AppRouter/>  
        </RecoilRoot>
      </ThemeProvider>
    </> 
  );
}

export default App;
