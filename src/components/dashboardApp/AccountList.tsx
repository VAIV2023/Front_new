import { Card} from "@mui/material";
import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { UseRowSelectHooks } from "react-table";
import { useRecoilState } from "recoil";
import { AccountListSelected, AccountListCurrent } from "../../atoms/PortPolioAtoms/AccountListAtom";
import { AccountListType } from "../../types/AccountListType";
import { useState, useEffect } from "react";
import { BaseURL } from "../../data/BaseURL";
import axios from "axios";


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'create', headerName: '생성일', width: 130 },
  { field: 'name', headerName: '계좌명', width: 130 },
  
  {
    field: 'code',
    headerName: '계좌코드',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];



// 랜덤스트링 생성함수
const generateRandomString = (num:number) => {
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < num; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}



export default function AccountList(){
    const [accountListSelected, setAccountListSelected] = useRecoilState<AccountListType[]>(AccountListSelected);
    const [currentAccountList, setCurrentAccountList] = useRecoilState<AccountListType[]>(AccountListCurrent);

    const account_URL = `${BaseURL}/checkaccount`;

    const onRowsSelectionHandler = (ids: any) => {
      const selectedRowsData : AccountListType[] = ids.map((id:number) => currentAccountList.find((currentAccountList) => currentAccountList.id === id));
      setAccountListSelected(selectedRowsData);
      console.log(selectedRowsData);
    };

    useEffect(()=>{
      axios.post(account_URL,{id:Number(localStorage.getItem("id"))})
      .then((res)=>{
        if(res.data.accounts.length===0){
          setCurrentAccountList([]);
        }else{
          const userAccount:AccountListType[] =[{id:1, name:res.data.accounts[0].name, create: res.data.accounts[0].createDate, code:res.data.accounts[0].code}]; 
          setCurrentAccountList(userAccount);
        }
      });
    },[]);

    
    


    return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={currentAccountList}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
          />
        </div>
      );
}