import styled from 'styled-components';
import Navigator from '../../components/Navigator';
import { PaginationTable } from '../../components/PaginationTable'
import React, {useEffect, useState, Suspense} from 'react';
import { isClicked } from '../../atoms/ButtonAtom';
import { atom, useRecoilState } from 'recoil';
import axios from 'axios';
import { AuthKEY, EndPoint } from '../../data/KRX';
import BackGround from '../../assets/images/title_background.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {GoogleChart} from '../../components/GoogleChart';
import { KrxStockType } from "../../types/KrxStockType";
// import {test} from "../../fetch/fetchkrx"
import {useQuery} from 'react-query'
import MOCK_DATA from '../../components/MOCK_DATA.json'
import { PaginationTable2 } from '../../components/TableHead';
import { tossTicker } from '../../atoms/TickerAtom';


const BrowserTodaystockContainer = styled.div`
    height:100vh;
    padding-top: 8vh;
    background-color: white;
`

const ButtonContainer = styled.div`
    display: flex;
    margin-left: 2vw;
    margin-top: 2vh;
    margin-bottom: 1vh;
`
interface MText{
    Background: string;
    FontColor: string;
}

const MarketDiv = styled.div<MText>`
    /*공통 스타일*/
    flex-direction: row;
    float:left;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-right: 1rem;
    text-align:center;
    line-height: 2.25rem;
    /*크기*/
    height: 2.25rem;
    width: 7rem;
    font-size: 1rem;
    background: ${(props) => props.Background};
    color: ${(props) => props.FontColor};
`

const KosButton = styled.button`
    /*공통 스타일*/
    // display: inline-flex;
    flex-direction: row;
    float:left;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-right: 1rem;
    /*크기*/
    height: 2.25rem;
    width: 7rem;
    font-size: 1rem;
    /*색상 */
    background: #228be6;
    &:hover{
        background: #339af0;
    }
    &:active{
        background: #1c7ed6;
    }
    // /*기타 */
    // & + & {
    //     margin-left: 1rem;
    // }
`

const StockContainer = styled.div`
    display: flex;
    background-color:white;
`

const RightSide = styled.div`
    margin-top: 5vh;
    position:fixed;
    right: 50%;
    top: 180px;
    margin-right: -720px;
    text-align:center;
    width:35vw;
`

const SelectBoxBottom =styled.div`
    display: flex;
    width: 100%;
    height: 70%;
    align-items: center;
    justify-content: center;
`

const InputField = styled.input`
    display: flex;
    width: 20%;
    height: 30%;
    text-align: right;
`;

interface IText{
    FontSize: string;
    FontColor: string;
    Width: string;
    Height: string;
    Justify?: string;
    Align?: string;
    Left?: string;
    Right?:string;
    Isbold: boolean;
}

const BrowserBox = styled.div<IText>`
    display:flex;
    width:${(props) => props.Width};
    height:${(props) => props.Height};
    font-size: ${(props) => props.FontSize};
    font-weight: ${(props) => props.Isbold ? "bold" : ""};
    color: ${(props) => props.FontColor};
    justify-content: ${(props) => props.Justify};
    align-items: ${(props) => props.Align};
    padding-left:${(props) => props.Left};
    padding-right:${(props) => props.Right};
`

const BrowserBackTestImgContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20vh;
    z-index: 1;
    position: relative;

    &::after {
        content:'';
        width: 100%;
        height: 20vh;
        background-image: url(${BackGround});
        background-repeat: no-repeat;
        background-size: 100% 20vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0.8;
    }

`
interface IText{
    FontSize: string;
    FontColor: string;
    Width: string;
    Height: string;
    Justify?: string;
    Align?: string;
    Left?: string;
    Right?:string;
    Isbold: boolean;
}

const BrowserTextBox = styled.div<IText>`
    display:flex;
    width:${(props) => props.Width};
    height:${(props) => props.Height};
    font-size: ${(props) => props.FontSize};
    font-weight: ${(props) => props.Isbold ? "bold" : ""};
    color: ${(props) => props.FontColor};
    justify-content: ${(props) => props.Justify};
    align-items: ${(props) => props.Align};
    padding-left:${(props) => props.Left};
    padding-right:${(props) => props.Right};
`

const TickerContainer = styled.div`
    margin: 0;
    padding: 0;
`

const ResetButton = styled.button`
    /*공통 스타일*/
    // display: inline-flex;
    flex-direction: row;
    float:left;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-right: 1rem;
    /*크기*/
    height: 2.25rem;
    width: 14rem;
    font-size: 1rem;
    margin-left: 1rem;
    /*색상 */
    background: red;
    &:hover{
        background: #a85432;
    }
    &:active{
        background: #a87732;
    }
    // /*기타 */
    // & + & {
    //     margin-left: 1rem;
    // }
`

const current = new Date();
const date = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`;

// console.log(MOCK_DATA[0].Ticker)

// export let kosdaqArr:string[] = []
// export let kospiArr:string[] = []

// const PaginationTable = React.lazy(()=> import("../../components/PaginationTable"))

function BrowserTodaystockPage(){
    
    const [numOfStock, setnumOfStock] = useState<Number>(0);
    const [isClick, setIsClick] = useRecoilState(isClicked);

    const handleChangeNumOfStock = (e : any) => {
        const { value } = e.target;
        const onlyNumber = value.replace(/[^0-9]/g, '');
        setnumOfStock(onlyNumber);
    };
    
    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();

        const button: HTMLButtonElement = event.currentTarget;
        alert("매수 완료!")
    };
    // console.log(MOCK_DATA[1].Ticker)

    const buttonReset = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    
        const button: HTMLButtonElement = event.currentTarget;
        setIsClick(false);
        setToss("000000");
    }; 

    interface newObject {
        end: string;
        start: string;
        ticker: string
    }


    const [kosdaqList, setKosdaqList] = useState<newObject[]>(Array)
    const [kospiList, setKospiList] = useState<newObject[]>(Array)
    useEffect(()=>{
        let completed = false;

        async function get(){
            const result = await axios.get(
                "http://3.37.180.191:5000/showtoppick"
            );
            if(!completed){
                setKosdaqList(result.data.KOSDAQ)
                setKospiList(result.data.KOSPI)
            }
        }
        get();
        return () => {
            completed = true;
        };
    },[])
    
    console.log(kosdaqList)
    console.log(kospiList)

    let kosdaqtemp:string[] = []
    let kospitemp:string[] = []

    if(kosdaqList){
        for(let i = 0; i < kosdaqList.length; i++){
            kosdaqtemp.push(kosdaqList[i].ticker)
        }
    
        for(let i = 0; i < kospiList.length; i++){
            kospitemp.push(kospiList[i].ticker)
        }
    }
    
    if(kosdaqtemp){
        console.log(kosdaqtemp)
        console.log(kospitemp)
    }



    // const [kosdaqArr, setKosdaqArr] = useState<string[]>(Array)
    // const [kospiArr, setKospiArr] = useState<string[]>(Array)
    // useEffect(()=>{
    //     setKosdaqArr(kosdaqtemp)
    //     setKospiArr(kospitemp)
    // }, [])

    // let kosdaqArr:string[] = []
    // let kospiArr:string[] = []

    // for(let i = 0; i < kosdaqList.length; i++){
    //     kosdaqArr.push(kosdaqList[i].ticker)
    //     console.log(kosdaqArr[i])
    // }
 
    // for(let i = 0; i < kospiList.length; i++){
    //     kospiArr.push(kospiList[i].ticker)
    //     console.log(kosdaqArr[i])
    // }

    // const {data} = useQuery<void | KrxStockType[] | undefined>(
    //     "test",
    //     () => test(),
    //     {
    //         onSuccess: (data) => {
    //           console.log(data);
    //         },
    //         onError: (error: any) => {
    //           alert(error.response.data.error);
    //         },
    //     }
    // );

    // console.log(data)
      
    const [toss, setToss] = useRecoilState(tossTicker);
    return(
        <>
            <Navigator/>
            <BrowserTodaystockContainer>
                <BrowserBackTestImgContainer>
                    <BrowserBox Width='30%' Height='20vh' FontSize='2.3rem' FontColor='#004C8B' Isbold={true} Justify="center" Align='center'>Today({date})'s Top Pick</BrowserBox>
                </BrowserBackTestImgContainer>

                <StockContainer>
                    <div>
                        
                        <ButtonContainer>
                            <MarketDiv FontColor='white' Background='#004C8B'>KOSPI</MarketDiv>
                        </ButtonContainer>
                        <PaginationTable2></PaginationTable2>
                        <div>{kospitemp.map((stock, index) => (
                            <div key ={index}>
                                <PaginationTable ticker = {stock}></PaginationTable>
                            </div>
                        ))}</div>
                        
                        <ButtonContainer>
                            <MarketDiv FontColor='white' Background='#004C8B'>KOSDAQ</MarketDiv>
                        </ButtonContainer>
                        <div>{kosdaqtemp.map((stock, index) => (
                            <div key ={index}>
                                <PaginationTable ticker = {stock}></PaginationTable>
                            </div>
                        ))}</div>
                        
                    </div>
                    
                    {isClick?(
                        <RightSide>
                            <ResetButton onClick={buttonReset}>차트 초기화</ResetButton>
                            {/* <ImageContainer src={samsung}/> */}
                            <GoogleChart ticker={toss}></GoogleChart>
                            <StockContainer>
                                <SelectBoxBottom>
                                    <InputField min="0" max="99" placeholder="0" type= 'Number' onChange={handleChangeNumOfStock} maxLength={2}></InputField>
                                    <BrowserTextBox Width='15%' Height=' ' FontSize='1rem' FontColor='' Isbold={false} Justify="right" Left=' '>주</BrowserTextBox>
                                </SelectBoxBottom>
                                <KosButton onClick={buttonHandler}>매수</KosButton>
                            </StockContainer>
                            
                        </RightSide>
                    ):(
                        <RightSide></RightSide>
                    )}

                </StockContainer>     
            </BrowserTodaystockContainer>
            
        </>
    );
}

export default BrowserTodaystockPage;