import {useEffect, useState} from "react";
import Chart from "react-google-charts";
import axios from 'axios';
import { AuthKEY, EndPoint } from '../data/KRX';

// const data = [
//     ['day', 'a', 'b', 'c', 'd'],
//     ['Mon', 20, 28, 38, 45],
//     ['Tue', 31, 38, 55, 66],
//     ['Wed', 50, 55, 77, 80],
//     ['Thu', 77, 77, 66, 50],
//     ['Fri', 68, 66, 22, 15],
// ];



// class GoogleChart extends Component {
    
//   constructor(props:any) {
//     super(props)
//   }
//   render() {
    
//     return (
          
//       <div className="container mt-5">
//           {/* <h2>React Candlestick Chart Example</h2> */}
//           <Chart
//             width={'100%'}
//             height={450}
//             chartType="CandlestickChart"
//             loader={<div>Loading Chart</div>}
//             data={data}
//             options={{
//               legend: 'none',
//             }}
//             rootProps={{ 'data-testid': '1' }}
//           />             
//       </div>                  
//   )
//     }
//   }

// export default GoogleChart;



export const options = {
  legend: "none",
  bar: { groupWidth: "100%" }, // Remove space between bars.
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
    risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
  },
};

interface ChartProps{
  ticker:string;
}

export function GoogleChart(props:ChartProps) {
  interface ExampleObject {
    [key:string] : any
  }
  
  const [stockName, setStockName] = useState(String)
  const [stock, setStock] = useState<ExampleObject[]>()
  // const array = ['삼성전자', '삼성바이오로직스', '삼성전자우', '삼성SDI', '삼성물산']
  useEffect(()=>{
    axios.get(EndPoint, {
      params:{
        serviceKey: `${AuthKEY}`,
        numOfRows: '10',
        pageNo: '1',
        resultType: 'json',
        likeSrtnCd: `${props.ticker}`
      },
    }).then((res:any) => setStock(res.data.response.body.items.item))
  },[])
  
  let data
  let itmNm
  if(stock){
    // console.log(stock)
    itmNm = stock['0'].itmsNm
    data = [
      ["Day", "max-min, beginning-closing", "", "", ""],
      // basDt lopr mkp clpr hipr
      [stock['9'].basDt.substr(4,7), Number(stock['9'].lopr), Number(stock['9'].mkp), Number(stock['9'].clpr), Number(stock['9'].hipr)],
      [stock['8'].basDt.substr(4,7), Number(stock['8'].lopr), Number(stock['8'].mkp), Number(stock['8'].clpr), Number(stock['8'].hipr)],
      [stock['7'].basDt.substr(4,7), Number(stock['7'].lopr), Number(stock['7'].mkp), Number(stock['7'].clpr), Number(stock['7'].hipr)],
      [stock['6'].basDt.substr(4,7), Number(stock['6'].lopr), Number(stock['6'].mkp), Number(stock['6'].clpr), Number(stock['6'].hipr)],
      [stock['5'].basDt.substr(4,7), Number(stock['5'].lopr), Number(stock['5'].mkp), Number(stock['5'].clpr), Number(stock['5'].hipr)],
      [stock['4'].basDt.substr(4,7), Number(stock['4'].lopr), Number(stock['4'].mkp), Number(stock['4'].clpr), Number(stock['4'].hipr)],
      [stock['3'].basDt.substr(4,7), Number(stock['3'].lopr), Number(stock['3'].mkp), Number(stock['3'].clpr), Number(stock['3'].hipr)],
      [stock['2'].basDt.substr(4,7), Number(stock['2'].lopr), Number(stock['2'].mkp), Number(stock['2'].clpr), Number(stock['2'].hipr)],
      [stock['1'].basDt.substr(4,7), Number(stock['1'].lopr), Number(stock['1'].mkp), Number(stock['1'].clpr), Number(stock['1'].hipr)],
      [stock['0'].basDt.substr(4,7), Number(stock['0'].lopr), Number(stock['0'].mkp), Number(stock['0'].clpr), Number(stock['0'].hipr)],
    ];
  }
  return (
    <div className="container mt-5">
      <h2>{itmNm}</h2>
      <Chart
        chartType="CandlestickChart"
        width="100%"
        height="400px"
        // loader={<div>Loading Chart</div>}
        data={data}
        options={options}
      />
    </div>
  );
}