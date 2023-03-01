import { useQuery } from "react-query";
import styled from "styled-components";
import { KrxStockType } from "../../types/KrxStockType";
import { fetchKrx } from "../../fetch/fetchPortpolio/fetchPortpolioKrx";
import { useState, useEffect } from 'react';


interface IStockPick{
    Width: string;
}

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

interface tickerType{
    ticker:string
}


export default function ToadaysPickRow({ticker}:tickerType){
    const [direction, setDirection] = useState<boolean>();
    const [resString, setResString] = useState<string | undefined>("");
    const [fetch, Setfetch] = useState<boolean>(false);

    const { data ,isLoading} = useQuery<KrxStockType>(
        `${ticker}`,
        () => fetchKrx(ticker),
        {
          onSuccess: (data) => {
            console.log(data);
            Setfetch(true);
          },
          onError: (error: any) => {
            alert(error.response.data.error);
          },
        }
    );   

    useEffect(()=>{
        if(data?.fltRt[0] === '-'){
            setDirection(true);
            if(data?.fltRt[1] === '.'){
                let minus_zero ='-0';
                let sub= data?.fltRt.substring(1);
                setResString(minus_zero.concat(sub));
            }else{
                setResString(data?.fltRt);
            }
        }else{
            setDirection(false);
            if(data?.fltRt[0] === '.'){
                let z = '0';
                setResString(z.concat(data?.fltRt));
            }else{
                setResString(data?.fltRt);
            }
        }



    },[fetch])
    
    if(isLoading){
        return(
            <BrowserTextBoxWrapper Width ='100%'>
                <BrowserTextBox Width = '30%' Height='6vh' FontSize = "" FontWeight = "bold" FontColor=""  Justify='left' Border = {true}></BrowserTextBox>
                <BrowserTextBox Width = '30%' Height='6vh' FontSize = "" FontWeight = "" FontColor={direction? "blue":"red"}  Justify='right' Border = {true}></BrowserTextBox>
                <BrowserTextBox Width = '20%' Height='6vh' FontSize = "" FontWeight = "" FontColor={direction? "blue":"red"}  Justify='right' Border = {true}></BrowserTextBox>    
            </BrowserTextBoxWrapper>
        );
    }
    

    return(
        <BrowserTextBoxWrapper Width ='100%'>
            <BrowserTextBox Width = '30%' Height='6vh' FontSize = "" FontWeight = "bold" FontColor=""  Justify='left' Border = {true}>{data?.itmsNm}</BrowserTextBox>
            <BrowserTextBox Width = '30%' Height='6vh' FontSize = "" FontWeight = "" FontColor={direction? "blue":"red"}  Justify='right' Border = {true}>{data?.clpr} KRW</BrowserTextBox>
            <BrowserTextBox Width = '20%' Height='6vh' FontSize = "" FontWeight = "" FontColor={direction? "blue":"red"}  Justify='right' Border = {true}>{direction? resString:`+${resString}`}%</BrowserTextBox>
        </BrowserTextBoxWrapper> 

    );
}