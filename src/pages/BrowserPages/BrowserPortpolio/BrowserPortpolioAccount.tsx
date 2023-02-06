import {
    Grid,
    Stack,
    Container,
    Typography,
    Button,
    CardHeader,
    Card,
    Box,
  } from "@mui/material";

import Iconify from "../../../components/Iconify";
import { Link as RouterLink } from "react-router-dom";
import AccountList from "../../../components/dashboardApp/AccountList";



function BrowserPortpolioAccount(){
    return(
        <Container maxWidth="xl">
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={5}
            >
                <Typography variant="h4" gutterBottom sx={{ color: "#000069" }}>
                    Account
                </Typography>
                <Grid>
                    <Button
                        variant="contained"
                        component={RouterLink}
                        to="#"
                        color="error"
                        startIcon={<Iconify icon="ic:round-minus" />}
                        
                        //onClick={() => setColumnModalOpen(true)}
                    >
                        계좌 삭제
                    </Button>
                    <Button
                        variant="contained"
                        component={RouterLink}
                        to="#"
                        color="success"
                        startIcon={<Iconify icon="eva:plus-fill" />}
                        //onClick={() => setColumnModalOpen(true)}
                    >
                        계좌 생성
                    </Button>
                </Grid>              
            </Stack>
            <Card>
                <AccountList/>
            </Card>
        </Container>
    );
}


export default BrowserPortpolioAccount;