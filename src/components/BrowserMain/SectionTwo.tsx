import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface ISection{
    Color?: string;
    Height?: string;
}
const SectionContainer = styled.div<ISection>`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${(props) => props.Height};
    background-color: white;
`




const SectionStockPickContainer = styled.div`
    display: flex;
    width: 90%;
    height: 40vh;
    align-items: center;
`

const TextBox = styled.div`
    display:flex;
    width: 100%;
    height: 15vh;
    font-size: 1.5rem;
    font-weight: bold;
    color: #374054;
    justify-content: center;
    align-items: center;
    line-height: 3rem;
`

const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 15vh;
    justify-content: center;
    align-items: center;
    
`
const TodaysPickButton = styled.button`
    display:flex;
    background-color: #093687;
    width: 50%;
    height: 8vh;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    border-radius: 1rem;
    border: 10px white;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);

    &:hover {
        transform: scale(1.2);
        transition: transform .5s;
        cursor: pointer;
    }


`

interface IStockPick{
    Width: string;
}

const SectionStockPick = styled.div<IStockPick>`
    display: flex;
    flex-direction: column;
    width: ${(props)=> props.Width};
    height: 40vh;
    align-items: center;
`

const BrowserTextBoxWrapper = styled.div<IStockPick>`
    display: flex;
    width: ${(props)=> props.Width};
    height: 6vh;
    justify-content: center;
`

interface IText{
    FontSize: string;
    FontWeight: string;
    FontColor: string;
    Width: string;
    Height: string;
    Justify: string;
    Border: boolean;
}

const BrowserTextBox = styled.div<IText>`
    display:flex;
    width:${(props) => props.Width};
    height:${(props) => props.Height};
    font-size: ${(props) => props.FontSize};
    font-weight: ${(props) => props.FontWeight};;
    color: ${(props) => props.FontColor};
    justify-content: ${(props) => props.Justify};
    align-items: center;
    border-bottom: ${(props) => props.Border? "1px solid #EEEEEE" : ""};
`

interface TodaysPick{
    name: string;
    price: number;
    ratio: string;
    direction: string;
}


function BrowserMainsectionTwo(){
    const navigate = useNavigate();

    const kospiarr : TodaysPick[] = [
        {name: "삼성전자", price: 63800, ratio: '+0.74', direction: 'red'},
        {name: "삼성SDI", price: 672000, ratio: '+3.54', direction: 'red'},
        {name: "삼성물산", price: 119600, ratio: '+0.67', direction: 'red'},
        {name: "현대자동차", price: 175100, ratio: '+5.67', direction: 'red'},
        {name: "카카오", price: 62600, ratio: '0.00', direction: 'blue'}
    ];

    const kosdakarr : TodaysPick[] = [
        {name: "새빗켐", price: 89500, ratio: '+7.06', direction: 'red'},
        {name: "에프에스티", price: 23000, ratio: '+7.73', direction: 'red'},
        {name: "대성하이텍", price: 9680, ratio: '+6.96', direction: 'red'},
        {name: "알체라", price: 11300, ratio: '-15.55', direction: 'blue'},
        {name: "에코프로", price: 7200, ratio: '+6.13', direction: 'red'}
    ];

    function handleClickbutton(){
        navigate("/todaystock");
    }

    return(
        <SectionContainer Height='40vh'>
            <SectionStockPickContainer>
                <SectionStockPick Width = '30%'>
                    <BrowserTextBox Width = '100%' Height='10vh' FontSize = "" FontWeight = "bold" FontColor=""  Justify='left' Border = {false}></BrowserTextBox>
                    <TextBox>검증된 AI가 추천하는 <br/>오늘의 종목을 확인하세요!</TextBox>
                    <ButtonWrapper>
                        <TodaysPickButton onClick ={handleClickbutton}>오늘의 종목</TodaysPickButton>
                    </ButtonWrapper>
                </SectionStockPick>
                <SectionStockPick Width = '35%'>
                    <BrowserTextBox Width = '80%' Height='9vh' FontSize = "1.5rem" FontWeight = "bold" FontColor="#374054"  Justify='left' Border = {false}>KOSPI 오늘의 종목</BrowserTextBox>
                    {kospiarr.map((element) =>(
                        <BrowserTextBoxWrapper Width ='100%'>
                            <BrowserTextBox Width = '30%' Height='6vh' FontSize = "" FontWeight = "bold" FontColor=""  Justify='left' Border = {true}>{element.name}</BrowserTextBox>
                            <BrowserTextBox Width = '30%' Height='6vh' FontSize = "" FontWeight = "" FontColor={element.direction}  Justify='right' Border = {true}>{element.price} KRW</BrowserTextBox>
                            <BrowserTextBox Width = '20%' Height='6vh' FontSize = "" FontWeight = "" FontColor={element.direction}  Justify='right' Border = {true}>{element.ratio}%</BrowserTextBox>
                        </BrowserTextBoxWrapper>

                    ))}
                </SectionStockPick>
                <SectionStockPick Width = '35%'>
                    <BrowserTextBox Width = '80%' Height='9vh' FontSize = "1.5rem" FontWeight = "bold" FontColor="#374054"  Justify='left' Border = {false}>KOSDAK 오늘의 종목</BrowserTextBox>
                    {kosdakarr.map((element) =>(
                        <BrowserTextBoxWrapper Width ='100%'>
                            <BrowserTextBox Width = '30%' Height='6vh' FontSize = "" FontWeight = "bold" FontColor=""  Justify='left' Border = {true}>{element.name}</BrowserTextBox>
                            <BrowserTextBox Width = '30%' Height='6vh' FontSize = "" FontWeight = "" FontColor={element.direction}  Justify='right' Border = {true}>{element.price} KRW</BrowserTextBox>
                            <BrowserTextBox Width = '20%' Height='6vh' FontSize = "" FontWeight = "" FontColor={element.direction}  Justify='right' Border = {true}>{element.ratio}%</BrowserTextBox>
                        </BrowserTextBoxWrapper>

                    ))}

                </SectionStockPick>
            </SectionStockPickContainer>
        </SectionContainer>
    );
}

export default BrowserMainsectionTwo;