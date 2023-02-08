import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios"
import { AuthKEY, EndPoint } from "../data/KRX";

export const options = {
  allowHtml: true,
  showRowNumber: true,
};

export const formatters = [
  {
    type: "ArrowFormat" as const,
    column: 1,
  },
];

interface Tableprops{
    ticker:string;
}

interface ExampleObject {
    [key:string] : any
}

export function Table({ticker}:Tableprops) {
    const [stockInfo, setStockInfo] = useState<ExampleObject[]>();
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
    let data
    if(stockInfo){
        console.log(stockInfo)
        itemName = stockInfo[0].itmsNm
        closingPrice = stockInfo[0].clpr
        ratio = stockInfo[0].fltRt
        rate = stockInfo[0].vs
        data = [
            [{itemName}, {closingPrice}, { v: {ratio}, f: `${ratio}%` }, { v: {rate}, f: `${rate}%` }],
        ];
    }

    return (
        <Chart
        chartType="Table"
        width="100%"
        height="400px"
        data={data}
        options={options}
        formatters={formatters}
        />
    );
}
