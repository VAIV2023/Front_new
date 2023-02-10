import React, { useEffect, useMemo, useState, useContext } from "react";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import { usePagination, useTable } from "react-table";
import "./table.css";
import styled from "styled-components";
import { atom, useRecoilState } from "recoil";
import { isClicked } from "../atoms/ButtonAtom";
import axios from "axios";
import { AuthKEY, EndPoint } from "../data/KRX";
import { KrxStockType } from "../types/KrxStockType";
// import {test} from "../fetch/fetchkrx"
import {useQuery} from 'react-query'
import { tossTicker } from "../atoms/TickerAtom";

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #1fa1ff;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /*크기*/
  height: 1.5rem;
  font-size: 1rem;

  /*색상 */
  background: #e7e7e7;
  &:hover {
    background: #d3d3d3;
  }
  &:active {
    background: #5f5f5f;
  }

  /*기타 */
  & + & {
    margin-left: 1rem;
  }
`;

interface Tableprops {
  ticker : string;
}

export const PaginationTable = ({ticker}:Tableprops) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const len: number = Object.keys(data).length;
  const [isClick, setIsClick] = useRecoilState(isClicked);
  const [toss, setToss] = useRecoilState(tossTicker);
  // console.log(table_data)
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    prepareRow,
  } = useTable(
    {
      // @ts-ignore
      columns,
      data,
    },
    usePagination
  );

//   const {data} = useQuery<KrxStockType[] | undefined>(
//     "test",
//     () => test(),
//     {
//         onSuccess: (data) => {
//           console.log(data);
//         },
//         onError: (error: any) => {
//           alert(error.response.data.error);
//         },
//     }
// );

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    setIsClick(true);
    setToss(ticker);
  }; 

  interface ExampleObject {
    [key:string] : any
  }

  const [stockInfo, setStockInfo] = useState<ExampleObject[]>()
  // const array = ['삼성전자', '삼성바이오로직스', '삼성전자우', '삼성SDI', '삼성물산']
  useEffect(()=>{
    axios.get(EndPoint, {
      params:{
        serviceKey: `${AuthKEY}`,
        numOfRows: '1',
        pageNo: '1',
        resultType: 'json',
        likeSrtnCd: `${ticker}`
      },
    }).then((res:any) => setStockInfo(res.data.response.body.items.item))
  },[])
  let closingPrice:string
  let itemName:string
  let ratio:string
  let rate:string
  if(stockInfo){
    console.log(stockInfo)
    itemName = stockInfo[0].itmsNm
    closingPrice = stockInfo[0].clpr
    ratio = stockInfo[0].fltRt
    rate = stockInfo[0].vs
  }
  // const clpr = stockInfo.clpr
  return (

 
    <div className="table">
      <table {...getTableProps()}>
        {/* <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {<th>Stock Name</th>}
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
              {<th>More</th>}
            </tr>
          ))}
        </thead> */}

        <tbody {...getTableBodyProps()}>
          {page.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {<td>{itemName}</td>}
                {<td>{ticker}</td>}
                {<td>{closingPrice}</td>}
                {<td>{ratio}</td>}
                {<td>{rate}</td>}
                {
                  <td>
                    <Button onClick={buttonHandler}>더 보기</Button>
                  </td>
                }
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PaginationTable;
