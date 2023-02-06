import axios from 'axios';
import { EndPoint } from '../data/KRX';
import { AuthKEY } from '../data/KRX';

export const test = async() =>
    await axios.get(EndPoint, {
        params: {
            serviceKey: `${AuthKEY}`,
            numOfRows: '5',
            pageNo: '1',
            resultType: 'json',
            itmsNm: '삼성전자'
        },
    }).then((res) => res.data.response.body.items.item);   
