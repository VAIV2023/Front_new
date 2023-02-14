import axios from 'axios';
import { BaseURL } from '../../data/BaseURL';

const account_URL = `${BaseURL}/checkaccount`

export const fetchAccount = (userId:number | null) =>
    axios.post(account_URL, {id: userId})
    .then((res) => res.data);   