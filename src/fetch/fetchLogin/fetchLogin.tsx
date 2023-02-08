import axios from 'axios';
import { BaseURL } from '../../data/BaseURL';

const Login_URL = `${BaseURL}/login`

export const fetchLogin = (userId : number) =>
    axios.post(Login_URL,{
        params: {
            id: userId,
        },
    }).then((res) => res);   