import {
    Grid,
    Container,
    Typography,
    CardHeader,
    Card,
    CardContent,
    Button,
    Box,
    Theme,
    CardActions,
  } from "@mui/material";

import { isMobile } from 'react-device-detect';
import { useQuery } from "react-query";
import { fetchKrx } from "../../fetch/fetchPortpolio/fetchPortpolioKrx";
import { KrxStockType } from "../../types/KrxStockType";
import { HoldingStockType } from "../../types/user_info";
import { SellStockType } from "../../types/user_info";


interface CardType{
    //likeIsinCd:string;
    stockData: HoldingStockType;
}


export default function TransactionCardHolding({stockData}:CardType){


    const { data: currentPrice} = useQuery<KrxStockType>(
        `${stockData.ticker}`,
        () => fetchKrx(stockData.ticker),
        {
          onSuccess: (data) => {
            //console.log(data);
          },
          onError: (error: any) => {
            alert(error.response.data.error);
          },
        }
    );   
   

    return(
        <Card
          sx={{
            py: 2,
            boxShadow: 0,
            color: (theme: Theme) => theme.palette["info"].darker,
            bgcolor:  (theme: Theme) => theme.palette["info"].lighter,
          }}
        >
            <CardHeader title = {stockData.stockname} sx={{fontWeight : "bold" , fontSize:"1.5rem" }}/>
            <CardContent>
              <Typography variant="body1" component="p" sx={isMobile? {fontWeight:"bold",pl:1, fontSize: "0.9rem" } :{  fontWeight:"bold",pl:1, fontSize: "1.2rem" }}>  
                매수일 :<br/>{stockData.buy_date}
              </Typography>
              <Typography variant="body1" component="p" sx={isMobile? {fontWeight:"bold",pt:2,pl:1, fontSize: "0.9rem" } :{  fontWeight:"bold",pt:2,pl:1, fontSize: "1.2rem" }}>  
                매수가 : {stockData.buy_price}
              </Typography>
              <Typography variant="body1" component="p" sx={isMobile? {fontWeight:"bold",pt:2,pl:1, fontSize: "0.9rem" } :{  fontWeight:"bold",pt:2,pl:1, fontSize: "1.2rem" }}>  
                총매수 : {stockData.buy_total_price}
              </Typography>
              <Typography variant="body1" component="p" sx={isMobile? {fontWeight:"bold",pt:2,pl:1, fontSize: "0.9rem" } :{  fontWeight:"bold",pt:2,pl:1, fontSize: "1.2rem" }}>  
                전일종가 : {currentPrice?.clpr}
              </Typography>
              <Typography variant="body1" component="p" sx={isMobile? {fontWeight:"bold",pt:2,pl:1, fontSize: "0.9rem" } :{  fontWeight:"bold",pt:2,pl:1, fontSize: "1.2rem" }}>  
                총평가 : {Number(currentPrice?.clpr) * stockData.quantity}
              </Typography>
              <Typography variant="body1" component="p" sx={isMobile? {fontWeight:"bold",pt:2,pl:1, fontSize: "0.9rem" } :{  fontWeight:"bold",pt:2,pl:1, fontSize: "1.2rem" }}>  
                수량 : {stockData.quantity}
              </Typography>
            </CardContent>
            <CardActions sx={{pl:4}}>
              {/* <Button variant="contained" color="success">
                매수하기
              </Button>
              <Button variant="contained" color="error">
                매도하기
              </Button> */}
            </CardActions>
        </Card>
    );
}