import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchTodaysPick } from '../../fetch/fetchTodaysPick';
import { TodaysPickType} from '../../types/TodaysPickType';
import ToadaysPickRow from './TodaysPickRow';
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
    color:#093687;
    background-color: white;
    width: 50%;
    height: 8vh;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.5rem;
    border-radius: 1rem;
    border: 2px solid #093687;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);

    &:hover {
        color:white;
        background-color: #093687;
        //transform: scale(1.2);
        //transition: transform .5s;
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



function BrowserMainsectionTwo(){
    const navigate = useNavigate();


    const {data:today} = useQuery<TodaysPickType>(
        "todayspick",
        () =>  fetchTodaysPick(),
        {
            onSuccess: (data) => {
              //console.log(data);
            },
            onError: (error: any) => {
              alert(error.response.data.error);
            },
        }
    );

    // Create Array
    const kospiTickerList : string[] = [];
    const kosdaqTickerList : string[] = [];
    let kospirow =0;
    let kosdaqrow =0;

    today?.KOSDAQ.forEach(element => {
        kosdaqTickerList.push(element.ticker);
        kosdaqrow++;
    });

    today?.KOSPI.forEach(element => {
        kospiTickerList.push(element.ticker);
        kospirow++;
    });
    let kospiarr :string[]=[];
    let kosdaqarr : string[]=[];
    
    if(kospirow>5){
        kospiarr = kospiTickerList.slice(0,5);
    }else{
        kospiarr = kospiTickerList;
    }
    if(kosdaqrow>5){
        kosdaqarr = kosdaqTickerList.slice(0,5);
    }else{
        kosdaqarr = kosdaqTickerList;
    }


    

    function handleClickbutton(){
        navigate("/todaystock");
    }

    return(
        <SectionContainer Height='45vh'>
            <SectionStockPickContainer>
                <SectionStockPick Width = '30%'>
                    <BrowserTextBox Width = '100%' Height='10vh' FontSize = "" FontWeight = "bold" FontColor=""  Justify='left' Border = {false}></BrowserTextBox>
                    <TextBox>검증된 AI가 추천하는 <br/>오늘의 종목을 확인하세요!</TextBox>
                    <ButtonWrapper>
                        <TodaysPickButton onClick ={handleClickbutton}>더 알아보기</TodaysPickButton>
                    </ButtonWrapper>
                </SectionStockPick>
                <SectionStockPick Width = '35%'>
                    <BrowserTextBox Width = '80%' Height='9vh' FontSize = "1.5rem" FontWeight = "bold" FontColor="#374054"  Justify='left' Border = {false}>KOSPI 오늘의 종목</BrowserTextBox>
                    {kospiarr.map((element) =>(
                        <ToadaysPickRow ticker = {element}></ToadaysPickRow>
                    ))}
                </SectionStockPick>
                <SectionStockPick Width = '35%'>
                    <BrowserTextBox Width = '80%' Height='9vh' FontSize = "1.5rem" FontWeight = "bold" FontColor="#374054"  Justify='left' Border = {false}>KOSDAQ 오늘의 종목</BrowserTextBox>
                    {kosdaqarr.map((element) =>(
                        <ToadaysPickRow ticker = {element}></ToadaysPickRow>
                    ))}
                </SectionStockPick>
            </SectionStockPickContainer>
        </SectionContainer>
    );
}

export default BrowserMainsectionTwo;