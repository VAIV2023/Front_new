import { Card} from "@mui/material";
import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { UseRowSelectHooks } from "react-table";
import { useRecoilState } from "recoil";
import { AccountListSelected, AccountListCurrent } from "../../atoms/PortPolioAtoms/AccountListAtom";
import { AccountListType } from "../../types/AccountListType";
import { useState, useEffect } from "react";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'create', headerName: '계좌명', width: 130 },
  { field: 'name', headerName: '생성일', width: 130 },
  
  {
    field: 'fullName',
    headerName: '계좌코드',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.create || ''}__${params.row.name || ''}`,
  },
];

const rows : AccountListType[]= [
  { id: 1, name: 'skku', create: '2023-01-31'}
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


    const onRowsSelectionHandler = (ids: any) => {
      const selectedRowsData : AccountListType[] = ids.map((id:number) => rows.find((row) => row.id === id));
      setAccountListSelected(selectedRowsData);
      //console.log(selectedRowsData);
    };

    useEffect(()=>{
      setCurrentAccountList(rows);
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