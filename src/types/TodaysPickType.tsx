export interface TodaysPickType{
    KOSDAQ: Array<TodaysObject>,
    KOSPI: Array<TodaysObject>
};


export interface TodaysObject{
    end: string,
    start: string,
    ticker:string
}