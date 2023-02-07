// import {useState} from "react";
import axios from 'axios';
// import { AuthKEY, EndPoint } from '../data/KRX';
// import MOCK_DATA from "../components/MOCK_DATA.json"
// import { KrxStockType } from '../types/KrxStockType';
// const numOfTicker:number = Object.keys(MOCK_DATA).length;
// let tickerList:string[] = [];

// for (const key in Object.values(MOCK_DATA)) {
//     tickerList.push(MOCK_DATA[key].Ticker);
// }



// export const test = async() =>{
//     const [stockList, setStockList] = useState<KrxStockType[]>([])

//     for(let i = 0; i < numOfTicker; i){
//         await axios.get(EndPoint, {
//             params: {
//                 serviceKey: `${AuthKEY}`,
//                 numOfRows: '10',
//                 pageNo: '1',
//                 resultType: 'json',
//                 likeSrtnCd: `${tickerList[i]}`,
//             },
//         }).then((res) => setStockList(current => [...current, res.data.response.body.items.item])); 
//     }
//     return (stockList)
// }