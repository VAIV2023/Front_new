import axios from 'axios';
import { BaseURL } from '../../data/BaseURL';

const account_URL = `${BaseURL}/checkaccount`

export const fetchAccount = () =>
    axios.post(account_URL,{
        params: {
            id: Number(localStorage.getItem("id")),
        },
    }).then((res) => console.log(res.data));   