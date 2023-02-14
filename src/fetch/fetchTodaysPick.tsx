import axios from 'axios';
import { BaseURL } from '../data/BaseURL';

const today_URL = `${BaseURL}/showtoppick`

export const fetchTodaysPick = () =>
    axios.get(today_URL)
    .then((res) => res.data);   