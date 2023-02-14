import {
    Grid,
    Container,
    Typography,
    CardHeader,
    Card,
    Box,
    Stack,
    Button,
  } from "@mui/material";
import TransactionCardSell from "../../../components/dashboardApp/TransactionCardSell";
import TransactionCardHolding from "../../../components/dashboardApp/TransactionCardHolding";
import Iconify from "../../../components/Iconify";
import { Link as RouterLink } from "react-router-dom";
import { useMutation } from "react-query";
import { fetchAccount } from "../../../fetch/fetchPortpolio/fetchAccount";
import { HoldingStockType } from "../../../types/user_info";
import { SellStockType } from "../../../types/user_info";
import axios from 'axios';

export default function BrowserPortpolioTransaction(){

    const codelist :string[] = ["000250","005930"];
    const selllist : string[] = ["035720","006400"];
    const holdingStockList : HoldingStockType[] = [
        {ticker: "000250", stockname: "삼천당제약", buy_date:"2023-02-01", buy_price:49600, buy_total_price:1984000, quantity:40},
        {ticker: "005930", stockname: "삼성전자", buy_date:"2023-02-02", buy_price:61800, buy_total_price:1977600, quantity:32},
        {ticker: "028260", stockname: "삼성물산", buy_date:"2023-02-02", buy_price:115300, buy_total_price:1960100, quantity:17},
        {ticker: "032830", stockname: "삼성생명", buy_date:"2023-02-02", buy_price:68200, buy_total_price:1977800, quantity:29},
        {ticker: "005380", stockname: "현대자동차", buy_date:"2023-02-02", buy_price:169900, buy_total_price:1868900, quantity:11},
        {ticker: "004020", stockname: "현대제철", buy_date:"2023-02-02", buy_price:34050, buy_total_price:1974900, quantity:58},
        {ticker: "051910", stockname: "LG화학", buy_date:"2023-02-02", buy_price:676000, buy_total_price:1352000, quantity:2},
        {ticker: "051900", stockname: "LG이노텍", buy_date:"2023-02-02", buy_price:277500, buy_total_price:1942500, quantity:7},
    ];
    const sellStockList : SellStockType[] = [
        {ticker: "035720", stockname: "카카오", buy_date:"2023-01-31", buy_price: 61400, buy_total_price:1964800 , sell_date: "2023-02-08", sell_price:69100 ,sell_total_price:2211200 ,quantity:32, rate:13},
        {ticker: "006400", stockname: "삼성SDI", buy_date:"2023-01-31", buy_price: 685000, buy_total_price:1370000 , sell_date: "2023-02-08", sell_price:730000 ,sell_total_price:1460000 ,quantity:2, rate:7},
    ];

/*     const {mutate} = useMutation(
        () => fetchAccount(userID),
        {
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error: any) => {
            // console.log(error);
            alert(error.response.data.error);
        },
    });
    //console.log(mutate); */

    

    return(
        <Container maxWidth="xl">
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={5}
            >
                <Typography variant="h4" gutterBottom sx={{ color: "#000069" }}>
                    Transaction
                </Typography>
                <Grid>
                    <Button
                        variant="contained"
                        component={RouterLink}
                        to="#"
                        color="error"
                        startIcon={<Iconify icon="material-symbols:stop-circle-outline-rounded" />}
                    >
                        매매 종료
                    </Button>
                    <Button
                        variant="contained"
                        component={RouterLink}
                        to="#"
                        color="success"
                        startIcon={<Iconify icon="mdi:reload" />}
                    >
                        매매 시작
                    </Button>
                </Grid>
            </Stack>


            <Typography variant="h4" sx={{ mt:5, mb: 5, color: "#000069" }}>
                보유주식
            </Typography>
            
            <Grid container spacing={3} sx = {{mt: 5, mb:5}}>
                {holdingStockList.map((element) => (
                    <Grid item xs={12} sm={6} lg={4}>
                        <TransactionCardHolding stockData ={element}/>
                    </Grid>
                ))} 
            </Grid>


            <Typography variant="h4" sx={{ mt:10, mb: 5, color: "#000069" }}>
                판매주식
            </Typography>


            <Grid container spacing={3} sx = {{mt: 5}}>
                {sellStockList.map((element) => (
                    <Grid item xs={12} sm={6} lg={4}>
                        <TransactionCardSell stockData ={element}/>
                    </Grid>
                ))} 
            </Grid>
            
        </Container>
    );
}