import {
    Grid,
    Container,
    Typography,
    CardHeader,
    Card,
    CardContent,
    Box,
  } from "@mui/material";

import { useQuery } from "react-query";
import { fetchKrx } from "../../fetch/fetchPortpolio/fetchPortpolioKrx";
import { KrxStockType } from "../../types/KrxStockType";
import { HoldingStockType } from "../../types/user_info";
import { SellStockType } from "../../types/user_info";


interface CardType{
    likeIsinCd:string;
    //stockData: SellStockType;
}


export default function TransactionCardSell({likeIsinCd}:CardType){


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
    );  
   

    return(
        <Card>
            <CardHeader title = {currentPrice?.itmsNm}/>
            <CardContent>
       
            </CardContent>
        </Card>
    );
}