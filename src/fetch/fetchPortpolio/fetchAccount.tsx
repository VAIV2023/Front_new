import axios from 'axios';
import { BaseURL } from '../../data/BaseURL';

const account_URL = `${BaseURL}/checkaccount`;
const create_URL = `${BaseURL}/createaccount`;
const delete_URL =`${BaseURL}/deleteaccount`;

export const fetchAccount = (userId:number) =>
    axios.post(account_URL, {id: userId})
    .then((res) => res.data.account);   


export const createAccount = (userId:number, account_code:string, account_name:string) =>
    axios.post(create_URL, {id:userId, code:account_code, name:account_name})
    .then((res)=> res.data.success);


export const deleteAccount = (userId:number, account_code:string, account_name:string) =>
    axios.post(delete_URL, {id:userId, code:account_code})
    .then((res)=> res.data.success);
