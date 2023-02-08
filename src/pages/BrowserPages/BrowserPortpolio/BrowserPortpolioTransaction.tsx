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

export default function BrowserPortpolioTransaction(){

    const codelist :string[] = ["000250","005930"];
    const selllist : string[] = ["035720","035420"];
    const {mutate} = useMutation(fetchAccount,{
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error: any) => {
            // console.log(error);
            alert(error.response.data.error);
        },
    });
    console.log(mutate);

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
                {codelist.map((element) => (
                    <Grid item xs={12} md={6} >
                        <TransactionCardHolding likeIsinCd ={element}/>
                    </Grid>
                ))} 
            </Grid>


            <Typography variant="h4" sx={{ mt:10, mb: 5, color: "#000069" }}>
                판매주식
            </Typography>


            <Grid container spacing={3} sx = {{mt: 5}}>
                {selllist.map((element) => (
                    <Grid item xs={12} md={6} >
                        <TransactionCardSell likeIsinCd ={element}/>
                    </Grid>
                ))} 
            </Grid>
            
        </Container>
    );
}