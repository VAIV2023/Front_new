import ReactApexChart from "react-apexcharts";
import { Dialog, DialogTitle ,DialogContent,Button, DialogActions, TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import { TodaysPickModalOpen } from "../../atoms/MobileTodaysPickAtom";
import { NowTicker } from "../../atoms/MobileTodaysPickAtom";
import { NowModalStock } from "../../atoms/MobileTodaysPickAtom";
import { useQuery } from "react-query";
import { KrxStockType } from "../../types/KrxStockType";
import { fetchApexChart } from "../../fetch/fetchApexChart";
import { useState, useEffect } from "react";
import axios from 'axios';
import { EndPoint } from '../../data/KRX';
import { AuthKEY } from '../../data/KRX';


export default function MobileTodaysPickModal(){
    const [isModalOpen, setIsModalOpen]= useRecoilState(TodaysPickModalOpen);
    const [nowTicker, setNowTicker]= useRecoilState(NowTicker);
    const [nowStockName, setNowStockName]= useRecoilState(NowModalStock);
    

    
    
    
     const { data:RawData } = useQuery<KrxStockType[]>(
        `${nowTicker}Apex`,
        () => fetchApexChart(nowTicker),
        {
          onSuccess: (data) => {
            console.log(data);
            //Setfetch(true);
          },
          onError: (error: any) => {
            alert(error.response.data.error);
          },
        }
    );  

    const chartData : KrxStockType[]= [];
    RawData?.forEach((element) => {
        chartData.push(element);
    });   

    return(

        <Dialog
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <DialogTitle>{nowStockName}</DialogTitle>
            <DialogContent> 
                <ReactApexChart
                    type ="candlestick"
                    series={[
                         {
                            data: 
                            chartData.map((element)=>{
                                    const xDate:string = element.basDt.slice(0,4) +"-" + element.basDt.slice(4,6) +"-" +element.basDt.slice(6)
                                    return {x:new Date(xDate), y:[element.mkp, element.hipr, element.lopr, element.clpr]}
                                }),
                        }, 
                    ]}
                    options={{
                        theme: {
                          mode: "dark",
                        },
                        chart: {
                          type: "candlestick",
                          height: 350,
                          width: 500,
                          toolbar: {
                            show:false,
                          },
                          background: "transparent",
                        },
                        stroke: {
                          curve: "smooth",
                          width: 2,
                        },
                        yaxis: {
                            show: true,
                            labels: {
                              style: {
                                colors: '#1f1e1e'
                              }
                            }
                        },
                        xaxis: {
                          type: "datetime",
                          categories: chartData.map((element) => element.basDt),
                          labels: {
                            style: {
                              colors: '#1f1e1e'
                            }
                          }
                        },
                        plotOptions: {
                            candlestick: {
                              colors: {
                                upward: '#3C90EB',
                                downward: '#DF7D46'
                              }
                            }
                        }
                    }}
                    width={300}
                    height={400}
                />



            </DialogContent>
            <DialogActions>
                <Button variant="outlined" color="primary" onClick={() => setIsModalOpen(false)}>닫기</Button>
            </DialogActions>


        </Dialog>
    );
}