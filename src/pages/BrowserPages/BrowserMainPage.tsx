import styled from 'styled-components';
import Navigator from '../../components/Navigator';
import SectionImg2 from '../../assets/images/SectionImg3.png';
import BrowserMainsectionTwo from '../../components/BrowserMain/SectionTwo';
import BrowserMainsectionThree from '../../components/BrowserMain/SectionThree';
import BrowserMainsectionFour from '../../components/BrowserMain/SectionFour';
import { fetchCheckStock } from '../../fetch/fetchPortpolio/fetchCheckStock';
import { fetchDailyMarketValue } from '../../fetch/fetchPortpolio/fetchDailyMarketValue';
import { fetchDailyRealProfit } from '../../fetch/fetchPortpolio/fetchDailyRealProfit';
import { useRecoilState } from "recoil";
import { AccountListCurrent } from "../../atoms/PortPolioAtoms/AccountListAtom";
import { AccountListType } from "../../types/AccountListType";

const BrowserMainContainer = styled.div`
    height:100%;
    padding-top: 8vh;
    background-color: white;
`

const BrowserMainIntroContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60vh;
    z-index: 1;
    position: relative;

    &::after {
        content:'';
        width: 100%;
        height: 60vh;
        background-image: url(${SectionImg2});
        background-repeat: no-repeat;
        background-size: 100% 60vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0.4;
    }

`
interface IText{
    FontSize: string;
    FontColor: string;
    Width: string;
    Height: string;
    Isbold: boolean;
    Align: boolean;
}

const BrowserTextBox = styled.div<IText>`
    display:flex;
    width:${(props) => props.Width};
    height:${(props) => props.Height};
    font-size: ${(props) => props.FontSize};
    font-weight: ${(props) => props.Isbold ? "bold" : ""};
    color: ${(props) => props.FontColor};
    justify-content: center;
    align-items: ${(props) => props.Align ? "center" : ""};
`
const BrowserStockNumInfo = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width:20vw;
    height:15vh;
`
const BrowserKospiNumInfo = styled.div`
    display:flex;
    flex-direction: column;
    height:15vh;
    width: 10vw;
`
const BrowserKosdakNumInfo = styled.div`
    display:flex;
    flex-direction: column;
    height:15vh;
    width: 10vw;
`
//------------Main Page Section 1







   

function BrowserMainPage(){
    
    const [currentAccountList, setCurrentAccountList] = useRecoilState<AccountListType[]>(AccountListCurrent);

    fetchCheckStock(2599175240, '2023-02-20__winter').then((res)=> console.log(res));
    fetchDailyMarketValue(2599175240, '2023-02-20__winter').then((res)=> console.log(res));
    fetchDailyRealProfit(2599175240, '2023-02-20__winter').then((res)=> console.log(res));
    

    return(
        <>
            <Navigator/>
            <BrowserMainContainer>
                <BrowserMainIntroContainer>
                    <BrowserTextBox FontSize='2.2rem' FontColor='' Width= '60vw' Height = '10vh' Isbold = {true} Align ={true}>??? 50%??? ???????????? ???????????? ?????????????????????</BrowserTextBox>
                    <BrowserTextBox FontSize='1rem' FontColor='#555555f0' Width= '45vw' Height = '8vh' Isbold = {true} Align ={false}>???????????? ??????????????? ????????? ??????????????? ???????????????</BrowserTextBox>
                    <BrowserStockNumInfo>
                        <BrowserKospiNumInfo>
                            <BrowserTextBox FontSize='2rem' FontColor='blue' Width= '10vw' Height = '9vh' Isbold = {true} Align ={true}>968</BrowserTextBox>
                            <BrowserTextBox FontSize='1rem' FontColor='#6f6f6fef' Width= '10vw' Height = '6vh' Isbold = {false} Align ={false}>Kospi</BrowserTextBox>
                        </BrowserKospiNumInfo>
                        <BrowserKosdakNumInfo>
                            <BrowserTextBox FontSize='2rem' FontColor='darkblue' Width= '10vw' Height = '9vh' Isbold = {true} Align ={true}>1500</BrowserTextBox>
                            <BrowserTextBox FontSize='1rem' FontColor='#6f6f6fef' Width= '10vw' Height = '6vh' Isbold = {false} Align ={false}>Kosdaq</BrowserTextBox>
                        </BrowserKosdakNumInfo>
                    </BrowserStockNumInfo>
                </BrowserMainIntroContainer>
                <BrowserMainsectionTwo/>
                <BrowserMainsectionThree/>
                <BrowserMainsectionFour/>


            </BrowserMainContainer>
        </>
        
            
        
    );
}

export default BrowserMainPage;