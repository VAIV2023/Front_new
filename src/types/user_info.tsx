export interface SellStockType {
    ticker: string;
    stockname: string;
    buy_date: string;
    buy_price: number;
    buy_total_price: number;
    sell_date: string;
    sell_price: number;
    sell_total_price: number;
    quantity: number;
    rate: number;
  }
  
  export interface HoldingStockType {
    ticker: string;
    stockname: string;
    buy_date: string;
    buy_price: number;
    buy_total_price: number;
    quantity: number;
  }
  
  export interface AccountType {
    is_simulating: boolean;
    sell_stock: Array<SellStockType>;
    holding_stock: Array<HoldingStockType>;
    total_buy: number;
    real_gain: number;
    real_profit: number;
  }
  
  export type AccountJSON = {
    [key: string]: AccountType;
  };
  