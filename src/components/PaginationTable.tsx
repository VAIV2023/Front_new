import React, { useMemo, useState, useContext } from 'react';
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import { usePagination, useTable } from 'react-table'
import './table.css'
import styled from 'styled-components';
import { useRecoilState} from "recoil";
import {isClicked} from "../atoms/ButtonAtom";

const Button = styled.button`
    display: inline-flex;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    /*크기*/
    height: 1.5rem;
    font-size: 1rem;

    /*색상 */
    background: #228be6;
    &:hover{
        background: #339af0;
    }
    &:active{
        background: #1c7ed6;
    }

    /*기타 */
    & + & {
        margin-left: 1rem;
    }
`

export const PaginationTable = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])
    const [isClick, setIsClick] = useRecoilState(isClicked);

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
    } = useTable({
            // @ts-ignore
            columns,
            data,
        },
        usePagination
    );
        
    

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();

        const button: HTMLButtonElement = event.currentTarget;
        setIsClick(true);

        alert('Button Clicked')
    };

    return (
        <div className="table">
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (                   
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                            {<th>More</th>}
                        </tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {page.map((row: any) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell: any) => {
                                    return (
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        
                                    );
                                })}
                                {<td><Button onClick={buttonHandler}>More information or BUY</Button></td>}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default PaginationTable;