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
import { useRecoilState } from "recoil";
import { AccountListCurrent } from "../../../atoms/PortPolioAtoms/AccountListAtom";
import { AccountListType } from "../../../types/AccountListType";
import { HoldingStockType } from "../../../types/user_info";
import { SellStockType } from "../../../types/user_info";
import { fetchStart } from "../../../fetch/fetchPortpolio/fetchStart";
import { fetchEnd } from "../../../fetch/fetchPortpolio/fetchEnd";


export default function BrowserPortpolioTransaction(){

    const [currentAccountList, setCurrentAccountList] = useRecoilState<AccountListType[]>(AccountListCurrent);
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

    const handleClickStart =() =>{
        if(currentAccountList.length === 0){
            alert("계좌를 생성해야 합니다!")
        }else{
            fetchStart(Number(localStorage.getItem("id")), currentAccountList[0].code)
            .then((res)=>{
                if(res.data.success === 0){
                    alert("이미 매매가 진행중입니다!");
                }else if(res.data.success === 1){
                    alert("매매가 시작되었습니다");
                }else{
                    alert("거래일이 아닙니다!");
                }
            });    
        }
    }

    const handleClickEnd =() =>{
        if(currentAccountList.length === 0){
            alert("계좌를 생성해야 합니다!")
        }else{
            fetchEnd(Number(localStorage.getItem("id")), currentAccountList[0].code)
            .then((res)=>{
                if(res.data.success === 1){
                    alert("매매가 중지 되었습니다");
                }else{
                    alert("오류가 발생하였습니다!");
                }
            });    
        }
    }



    

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
                        onClick={handleClickEnd}
                    >
                        매매 종료
                    </Button>
                    <Button
                        variant="contained"
                        component={RouterLink}
                        to="#"
                        color="success"
                        startIcon={<Iconify icon="mdi:reload" />}
                        onClick={handleClickStart}
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
                    <Grid item key={element.ticker} xs={6} sm={6} lg={4}>
                        <TransactionCardHolding key={element.ticker} stockData ={element}/>
                    </Grid>
                ))} 
            </Grid>


            <Typography variant="h4" sx={{ mt:10, mb: 5, color: "#000069" }}>
                판매주식
            </Typography>


            <Grid container spacing={3} sx = {{mt: 5}}>
                {sellStockList.map((element) => (
                    <Grid item key={element.ticker} xs={6} sm={6} lg={4}>
                        <TransactionCardSell key={element.ticker} stockData ={element}/>
                    </Grid>
                ))} 
            </Grid>
            
        </Container>
    );
}