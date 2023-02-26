import axios from 'axios';
import { BaseURL } from '../../data/BaseURL';

const CheckStock_URL = `${BaseURL}/checkstocks`

export const fetchCheckStock = (userId: number, account:string) =>
    axios.post(CheckStock_URL, {id:userId, code:account}).then((res) => res);