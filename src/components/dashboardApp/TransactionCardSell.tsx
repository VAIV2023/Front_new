import {
    Grid,
    Container,
    Typography,
    CardHeader,
    Card,
    CardContent,
    CardActions,
    Box,
    Theme,
  } from "@mui/material";

import { useQuery } from "react-query";
import { fetchKrx } from "../../fetch/fetchPortpolio/fetchPortpolioKrx";
import { KrxStockType } from "../../types/KrxStockType";
import { HoldingStockType } from "../../types/user_info";
import { SellStockType } from "../../types/user_info";
import { isMobile } from 'react-device-detect';

interface CardType{
    //likeIsinCd:string;
    stockData: SellStockType;
}


export default function TransactionCardSell({stockData}:CardType){
  
    /* console.log(likeIsinCd);
    const { data: currentPrice} = useQuery<KrxStockType>(
        `${likeIsinCd}`,
        () => fetchKrx(likeIsinCd),
        {
          onSuccess: (data) => {
            //console.log(data);
          },
          onError: (error: any) => {
            alert(error.response.data.error);
          },
        }
    );   */
   

    return(
        <Card
          sx={{
            py: 2,
            boxShadow: 0,
            color: (theme: Theme) => theme.palette["error"].darker,
            bgcolor:  (theme: Theme) => theme.palette["error"].lighter,
          }}
        >
            <CardHeader title = {stockData.stockname}/>
            <CardContent>
              <Typography variant="body1" component="p" sx={isMobile? {fontWeight:"bold",pl:1, fontSize: "0.9rem" } :{  fontWeight:"bold",pl:1, fontSize: "1.2rem" }}>  
                  보유기간 :<br/>{stockData.buy_date}<br/>~{stockData.sell_date}
                </Typography>
                <Typography variant="body1" component="p" sx={isMobile? {fontWeight:"bold",pt:2,pl:1, fontSize: "0.9rem" } :{  fontWeight:"bold",pt:2,pl:1, fontSize: "1.2rem" }}>  
                  매수가 : {stockData.buy_price}
                </Typography>
                <Typography variant="body1" component="p" sx={isMobile? {fontWeight:"bold",pt:2,pl:1, fontSize: "0.9rem" } :{  fontWeight:"bold",pt:2,pl:1, fontSize: "1.2rem" }}>  
                  총매수 : {stockData.buy_total_price}
                </Typography>
                <Typography variant="body1" component="p" sx={isMobile? {fontWeight:"bold",pt:2,pl:1, fontSize: "0.9rem" } :{  fontWeight:"bold",pt:2,pl:1, fontSize: "1.2rem" }}>  
                  매도가 : {stockData.sell_price}
                </Typography>
                <Typography variant="body1" component="p" sx={isMobile? {fontWeight:"bold",pt:2,pl:1, fontSize: "0.9rem" } :{  fontWeight:"bold",pt:2,pl:1, fontSize: "1.2rem" }}>  
                  총매도 : {stockData.sell_total_price}
                </Typography>
                <Typography variant="body1" component="p" sx={isMobile? {fontWeight:"bold",pt:2,pl:1, fontSize: "0.9rem" } :{  fontWeight:"bold",pt:2,pl:1, fontSize: "1.2rem" }}>  
                  수익률 : {stockData.rate}%
                </Typography>
            </CardContent>
        </Card>
    );
}