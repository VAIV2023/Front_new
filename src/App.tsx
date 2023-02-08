import './App.css';
import GlobalStyles from './GlobalStyled';
import AppRouter from "./AppRouter";
import { RecoilRoot } from "recoil";
import ThemeProvider from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";


function App() {
  const queryClient = new QueryClient();
  //axios.defaults.withCredentials = true;

  return (
    <>
      <GlobalStyles/>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <AppRouter/>  
          </RecoilRoot>
        </QueryClientProvider>
      </ThemeProvider>
    </> 
  );
}

export default App;
