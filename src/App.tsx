import './App.css';
import GlobalStyles from './GlobalStyled';
import AppRouter from "./AppRouter";
import { RecoilRoot } from "recoil";


function App() {
  return (
    <>
      <GlobalStyles/>
        <RecoilRoot>
          <AppRouter />  
        </RecoilRoot>
    </> 
  );
}

export default App;
