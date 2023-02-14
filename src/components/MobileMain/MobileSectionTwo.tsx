import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import {
    Grid,
    Typography,
    Button,
  } from "@mui/material";
import { useQuery } from 'react-query';
import { fetchTodaysPick } from '../../fetch/fetchTodaysPick';
import { TodaysPickType } from '../../types/TodaysPickType';
import ToadaysPickRow from '../BrowserMain/TodaysPickRow';



const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 5vh;
    justify-content: center;
    align-items: center;
    
`







function MobileMainsectionTwo(){

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




    return(
        <Grid container spacing={2} sx ={{pt:5,pb:5,backgroundColor:"white",display:"flex"}}>
            <Grid item xs={12} sm={6} sx ={{pb:3}}>
                <Typography variant='h4' align='left' sx ={{pl:5, pb:1, color:"#374054"}}>KOSPI 오늘의 종목</Typography>
                {kospiarr.map((element) =>(
                    <ToadaysPickRow ticker ={element}></ToadaysPickRow>
                ))}
            </Grid>
            <Grid item xs={12} sm={6} sx ={{pb:3}}>
                <Typography variant='h4' align='left' sx ={{pl:5, pb:1, color:"#374054"}}>KOSDAK 오늘의 종목</Typography>
                    {kosdaqarr.map((element) =>(
                        <ToadaysPickRow ticker ={element}></ToadaysPickRow>
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