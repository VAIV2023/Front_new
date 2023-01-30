import React, { useMemo, useState, useContext } from 'react';
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import { usePagination, useTable } from 'react-table'
import './table.css'
import styled from 'styled-components';

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

export interface GlobalStateInterface {
    isClicked: Boolean;
}

const GlobalStateContext = createContext({
    state: {} as Partial<GlobalStateInterface>,
    setState:{} as 
})

export const PaginationTable = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

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
        setClickedButton(true);

        alert('Button Clicked')
    };

    // const { pageIndex, pageSize } = state

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
                            {/* {<th>Buy Button</th>} */}
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
                                        // <button value={cell.accessor} o}></button>
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        
                                    );
                                })}
                                {/* {<td><Button onClick={buttonImageHandler}>Candlestick Chart</Button></td>} */}
                                {<td><Button onClick={buttonHandler}>More information or BUY</Button></td>}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {/* <div className="table-pagination" style={{margin: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    Previous
                </button>
                <span>
                    <strong style={{display: 'block', width: '100px', textAlign: 'center'}}>
                        {pageIndex + 1} / {pageOptions.length} 
                    </strong>
                </span>
                <span>
                    Go to page: {' '}
                    <input type="number" defaultValue={pageIndex + 1}
                    onChange={(e) => {
                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0 
                        gotoPage(pageNumber)
                    }} 
                    style={{width: '50px'}} />
                </span>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    Next
                </button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>
            </div>
            <div className="table-pagesize" style={{margin: '5px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
                    {
                        [10, 25, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}개 씩 보기
                            </option>
                        ))
                    }
                </select>
            </div> */}
        </div>
    );
}

export default PaginationTable;
export const useAuth = () => useContext()