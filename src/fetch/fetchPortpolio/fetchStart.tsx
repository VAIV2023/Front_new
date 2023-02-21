import axios from 'axios';
import { BaseURL } from '../../data/BaseURL';

const start_URL = `${BaseURL}/startportfolio`

export const fetchStart = (userId: number, account:string) =>
    axios.post(start_URL, {id:userId, code:account}).then((res) => res);