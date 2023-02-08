import axios from 'axios';
import { EndPoint } from '../../data/KRX';
import { AuthKEY } from '../../data/KRX';

export const fetchKrx = (ticker: string) =>
    axios.get(EndPoint, {
        params: {
            serviceKey: `${AuthKEY}`,
            numOfRows: '5',
            pageNo: '1',
            resultType: 'json',
            likeIsinCd: `${ticker}`
        },
    }).then((res) => res.data.response.body.items.item[0]);   
