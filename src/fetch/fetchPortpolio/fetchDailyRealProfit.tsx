import axios from 'axios';
import { BaseURL } from '../../data/BaseURL';

const DailyRealProfit_URL = `${BaseURL}/dailyrealprofit`

export const fetchDailyRealProfit = (userId: number, account:string) =>
    axios.post(DailyRealProfit_URL, {id:userId, code:account}).then((res) => res);