import styled from 'styled-components';
import Navigator from '../../components/Navigator';
import titlebackground from '../../assets/images/title_background.png';

//import axios from 'axios';

const BrowserMainContainer = styled.div`
    height:100%;
    padding-top: 12vh;
`

const BrowserMainIntroContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60vh;
    background-image: url(${titlebackground});
    background-repeat: no-repeat;
    background-size: 100% 60vh;
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
interface ISection{
    Color?: string;
}
const BrowserMainSectionContainer = styled.div<ISection>`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60vh;
`



function BrowserMainPage(){
    

    return(
        <>
            <Navigator/>
            <BrowserMainContainer>
                <BrowserMainIntroContainer>
                    <BrowserTextBox FontSize='2.2rem' FontColor='' Width= '60vw' Height = '10vh' Isbold = {true} Align ={true}>연 50%의 수익률을 보장하는 로보어드바이저</BrowserTextBox>
                    <BrowserTextBox FontSize='1rem' FontColor='#555555f0' Width= '45vw' Height = '8vh' Isbold = {false} Align ={false}>커스터마이징 가능하고 자동화된 시스템으로 편리한 사용환경을 제공합니다</BrowserTextBox>
                    <BrowserStockNumInfo>
                        <BrowserKospiNumInfo>
                            <BrowserTextBox FontSize='2rem' FontColor='blue' Width= '10vw' Height = '9vh' Isbold = {true} Align ={true}>968</BrowserTextBox>
                            <BrowserTextBox FontSize='1rem' FontColor='#6f6f6fef' Width= '10vw' Height = '6vh' Isbold = {false} Align ={false}>Kospi</BrowserTextBox>
                        </BrowserKospiNumInfo>
                        <BrowserKosdakNumInfo>
                            <BrowserTextBox FontSize='2rem' FontColor='darkblue' Width= '10vw' Height = '9vh' Isbold = {true} Align ={true}>1500</BrowserTextBox>
                            <BrowserTextBox FontSize='1rem' FontColor='#6f6f6fef' Width= '10vw' Height = '6vh' Isbold = {false} Align ={false}>Kosdak</BrowserTextBox>
                        </BrowserKosdakNumInfo>
                    </BrowserStockNumInfo>
                </BrowserMainIntroContainer>
                <BrowserMainSectionContainer Color = "#6495ED"></BrowserMainSectionContainer>
            </BrowserMainContainer>
        </>
        
            
        
    );
}

export default BrowserMainPage;