export interface TodaysPickType{
    KOSDAQ: Array<TodaysObject>,
    KOSPI: Array<TodaysObject>,
    KOSPI_new: Array<TodaysObject>,
    KOSDAQ_new: Array<TodaysObject>
};


export interface TodaysObject{
    end: string,
    start: string,
    ticker:string
}