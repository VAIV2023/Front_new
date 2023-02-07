import React, { useEffect, useMemo, useState, useContext } from "react";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import { usePagination, useTable } from "react-table";
import "./table.css";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { isClicked } from "../atoms/ButtonAtom";
import axios from "axios";
import { AuthKEY, EndPoint } from "../data/KRX";
import { KrxStockType } from "../types/KrxStockType";
// import {test} from "../fetch/fetchkrx"
import {useQuery} from 'react-query'

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



export const PaginationTable2 = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const len: number = Object.keys(data).length;
  const [isClick, setIsClick] = useRecoilState(isClicked);
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
  }; 
  
  return (

 
    <div className="table">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
              {<th>More info...</th>}
            </tr>
          ))}
        </thead>

        {/* <tbody {...getTableBodyProps()}>
          {page.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {<td>{ticker}</td>}
                {row.cells.map((cell: any) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                {
                  <td>
                    <Button onClick={buttonHandler}>See More</Button>
                  </td>
                }
              </tr>
            );
          })}
        </tbody> */}
      </table>
    </div>
  );
};

export default PaginationTable2;
