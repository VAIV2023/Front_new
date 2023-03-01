import { useState } from "react";
import { useQuery } from "react-query";
import styled from 'styled-components';
import {
    Container,
    Typography,
    Box,
    Stack,
    Tab,
    Tabs,
  } from "@mui/material";
import { useRecoilState } from "recoil";
import { TodaysPickType } from "../../types/TodaysPickType";
import { fetchTodaysPick } from "../../fetch/fetchTodaysPick";
import MobileTodaysPickRow from "../../components/MobileTodayPick/MobileTodaysPickRow";
import MobileTodaysPickModal from "../../components/MobileTodayPick/MobileTodaysPickModal";
import { KrxStockType } from "../../types/KrxStockType";
import { fetchApexChart } from "../../fetch/fetchApexChart";
import { NowTicker } from "../../atoms/MobileTodaysPickAtom";

interface IStockPick{
    Width: string;
}

const MobileTextBoxWrapper = styled.div<IStockPick>`
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

const MobileTextBox = styled.div<IText>`
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

export default function MobileTodayPickPage(){
    const [isKospi, setIsKospi] = useState<boolean>(true);
    const [isNew, setIsNew] = useState<boolean>(true);
    const [value, setValue] = useState(0);
    const [modelValue, setModelValue] = useState(0);
    const [nowTicker, setNowTicker]= useRecoilState(NowTicker);

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
     const kospiTickerList_new : string[] = [];
     const kosdaqTickerList_new : string[] = [];

     today?.KOSDAQ.forEach(element => {
        kosdaqTickerList.push(element.ticker);
     });
     today?.KOSDAQ_new.forEach(element => {
        kosdaqTickerList_new.push(element.ticker);
    });
     today?.KOSPI.forEach(element => {
        kospiTickerList.push(element.ticker);
     });
     today?.KOSPI_new.forEach(element => {
        kospiTickerList_new.push(element.ticker);
    });

    

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
      if(newValue===0){
        setIsKospi(true);
      }else{
        setIsKospi(false);
      }
    };

    const handleModelChange = (event: React.SyntheticEvent, newModelValue: number) => {
        setModelValue(newModelValue);
        if(newModelValue===0){
          setIsNew(true);
        }else{
          setIsNew(false);
        }
      };




    return(
        <Container maxWidth="xl" >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={5}
            >
                <Typography variant="h4" gutterBottom sx={{ color: "#000069" }}>
                    Today's Pick / 오늘의 종목
                </Typography>
            </Stack>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' , pb:2}}>
                <Tabs value={modelValue} onChange={handleModelChange} sx={{pl:2,pb:2}}>
                    <Tab label="Short_Swing" sx={{ fontSize:5, width:5}}/>
                    <Tab label="Long_Swing" sx={{ fontSize:5, width:5}}/>
                </Tabs>
                <Tabs value={value} onChange={handleChange} centered sx={{pb:2}}>
                    <Tab label="KOSPI" />
                    <Tab label="KOSDAQ" />
                </Tabs>
                <MobileTextBoxWrapper Width ='100%'>
                    <MobileTextBox Width = '30%' Height='6vh' FontSize = "0.9rem" FontWeight = "bold" FontColor="#000069"  Justify='left' Border = {true}>종목명</MobileTextBox>
                    <MobileTextBox Width = '25%' Height='6vh' FontSize = "0.9rem" FontWeight = "bold" FontColor="#000069"  Justify='right' Border = {true}>전일종가</MobileTextBox>
                    <MobileTextBox Width = '20%' Height='6vh' FontSize = "0.9rem" FontWeight = "bold" FontColor="#000069"  Justify='right' Border = {true}>전일대비</MobileTextBox>
                    <MobileTextBox Width = '15%' Height='6vh' FontSize = "0.9rem" FontWeight = "bold" FontColor="#000069"  Justify='right' Border = {true}>등락률</MobileTextBox>
                </MobileTextBoxWrapper>
                
                {isKospi?(
                    isNew? 
                    kospiTickerList.map((element:string) =>(
                        <MobileTodaysPickRow key={element} ticker ={element}></MobileTodaysPickRow>
                    )) : 
                    kospiTickerList_new.map((element:string) =>(
                        <MobileTodaysPickRow key={element} ticker ={element}></MobileTodaysPickRow>
                    ))
                ):(
                    isNew?
                    kosdaqTickerList.map((element:string) =>(
                        <MobileTodaysPickRow key={element} ticker ={element}></MobileTodaysPickRow>
                    )) :
                    kosdaqTickerList_new.map((element:string) =>(
                        <MobileTodaysPickRow key={element} ticker ={element}></MobileTodaysPickRow>
                    ))
                )}            
            </Box>
            <MobileTodaysPickModal/>
        </Container>
    );
}