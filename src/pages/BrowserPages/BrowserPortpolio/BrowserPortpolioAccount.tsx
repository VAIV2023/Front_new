import { useRecoilState } from "recoil"; 
import { useState } from "react";
import {
    Grid,
    Stack,
    Container,
    Typography,
    Button,
    Card,
  } from "@mui/material";

import Iconify from "../../../components/Iconify";
import { Link as RouterLink } from "react-router-dom";
import AccountList from "../../../components/dashboardApp/AccountList";
import {AccountListSelected, AccountListCurrent } from "../../../atoms/PortPolioAtoms/AccountListAtom";
import { AccountListType } from "../../../types/AccountListType";
import AccountModal from "../../../components/dashboardApp/AccountModal";
import axios from "axios";
import { BaseURL } from "../../../data/BaseURL";

function BrowserPortpolioAccount(){

    //삭제시 이용하기
    const [accountListSelected, setAccountListSelected] = useRecoilState<AccountListType[]>(AccountListSelected);
    const [currentAccountList, setCurrentAccountList] = useRecoilState<AccountListType[]>(AccountListCurrent);

    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const delete_URL =`${BaseURL}/deleteaccount`;

    const handleRemoveCLick =() =>{


        if(accountListSelected.length===0){
            setCurrentAccountList(currentAccountList);
        }else{
            const currentAccount: AccountListType[] =  accountListSelected.filter(
                (item) => currentAccountList.filter((i) => i.id !== item.id).length > 0
            );
            setCurrentAccountList(currentAccount);
            console.log(accountListSelected[0].code);
            axios.post(delete_URL, {id:Number(localStorage.getItem("id")), code:accountListSelected[0].code});

        }
    }

    const handleCreateCLick =() =>{
        if(currentAccountList.length > 0){
            alert("계좌는 1개만 생성이 가능 합니다.");
        }else{
            setModalOpen(true);
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
                    Account
                </Typography>
                <Grid>
                    <Button
                        variant="contained"
                        component={RouterLink}
                        to="#"
                        color="error"
                        startIcon={<Iconify icon="ic:round-minus" />}
                        onClick={() => handleRemoveCLick()}
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
                        onClick={() => handleCreateCLick()}
                        //onClick={() => setColumnModalOpen(true)}
                    >
                        계좌 생성
                    </Button>
                </Grid>
                <AccountModal
                    modalOpen = {modalOpen}
                    setModalOpen = {setModalOpen}
                />      
            </Stack>
            <Card>
                <AccountList/>
            </Card>
        </Container>
    );
}


export default BrowserPortpolioAccount;