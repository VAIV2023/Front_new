export interface DailyMarketValue{
    dailyMarketValue: DailyDict[];
    success: number;
}


export interface DailyRealProfit{
    dailyRealProfit:DailyDict[]
    success:number;
}

export interface DailyDict{
    date:string;
    value:number;
}