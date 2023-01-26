export interface KrxStockType {
    basdt: string; //기준 날짜
    clpr : string; // 종가
    fltRt: string; // 전일대비 등락 비율
    hipr : string; // 고가
    isinCd : string; // ISIN 코드, 국제 채권식별번호
    itmsNm: string; //주식 이름
    lopr : string; // 저가
    lstgStCnt : string; // 종목의 상장주식수
    mkp : string; // 시가
    mrktCtg : string; // 시장 구분
    mrktTotAmt: string; // 시가 총액
    srtnCd : string; // 단축코드
    trPrc : string; // 거래대금
    trqu: string; // 거래량
    vs: string; // 전일대비 등락
}