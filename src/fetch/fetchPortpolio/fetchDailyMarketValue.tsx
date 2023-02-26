import axios from 'axios';
import { BaseURL } from '../../data/BaseURL';

const DailyMarketValue_URL = `${BaseURL}/dailymarketvalue`

export const fetchDailyMarketValue = (userId: number, account:string) =>
    axios.post(DailyMarketValue_URL, {id:userId, code:account}).then((res) => res);