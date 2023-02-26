import axios from 'axios';
import { BaseURL } from '../../data/BaseURL';

const end_URL = `${BaseURL}/endportfolio`

export const fetchEnd = (userId: number, account:string) =>
    axios.post(end_URL, {id:userId, code:account}).then((res) => res);