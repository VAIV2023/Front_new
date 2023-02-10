import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import {
    Grid,
    Typography,
    Button,
  } from "@mui/material";



const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 5vh;
    justify-content: center;
    align-items: center;
    
`
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

interface TodaysPick{
    name: string;
    price: number;
    ratio: string;
    direction: string;
}


function MobileMainsectionTwo(){


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


    return(
        <Grid container spacing={2} sx ={{pt:5,pb:5,backgroundColor:"white",display:"flex"}}>
            <Grid item xs={12} sm={6} sx ={{pb:3}}>
                <Typography variant='h4' align='left' sx ={{pl:5, pb:1, color:"#374054"}}>KOSPI 오늘의 종목</Typography>
                {kospiarr.map((element) =>(
                        <MobileTextBoxWrapper Width ='100%'>
                            <MobileTextBox Width = '30%' Height='6vh' FontSize = "" FontWeight = "bold" FontColor=""  Justify='left' Border = {true}>{element.name}</MobileTextBox>
                            <MobileTextBox Width = '30%' Height='6vh' FontSize = "" FontWeight = "" FontColor={element.direction}  Justify='right' Border = {true}>{element.price} KRW</MobileTextBox>
                            <MobileTextBox Width = '20%' Height='6vh' FontSize = "" FontWeight = "" FontColor={element.direction}  Justify='right' Border = {true}>{element.ratio}%</MobileTextBox>
                        </MobileTextBoxWrapper>

                ))}
            </Grid>
            <Grid item xs={12} sm={6} sx ={{pb:3}}>
                <Typography variant='h4' align='left' sx ={{pl:5, pb:1, color:"#374054"}}>KOSDAK 오늘의 종목</Typography>
                    {kosdakarr.map((element) =>(
                        <MobileTextBoxWrapper Width ='100%'>
                            <MobileTextBox Width = '30%' Height='6vh' FontSize = "" FontWeight = "bold" FontColor=""  Justify='left' Border = {true}>{element.name}</MobileTextBox>
                            <MobileTextBox Width = '30%' Height='6vh' FontSize = "" FontWeight = "" FontColor={element.direction}  Justify='right' Border = {true}>{element.price} KRW</MobileTextBox>
                            <MobileTextBox Width = '20%' Height='6vh' FontSize = "" FontWeight = "" FontColor={element.direction}  Justify='right' Border = {true}>{element.ratio}%</MobileTextBox>
                        </MobileTextBoxWrapper>

                    ))}
            </Grid>
            <Grid item xs={12} sm={12} alignItems="center">
                <ButtonWrapper>
                    <Button
                        variant="contained"
                        component={RouterLink}
                        to="/todaystock"
                        sx={{width:"80%", height:"5vh"}}
                    >오늘의 종목을 더 확인해 보세요!</Button>
                </ButtonWrapper>
            </Grid>
        </Grid>
    );
}

export default MobileMainsectionTwo;