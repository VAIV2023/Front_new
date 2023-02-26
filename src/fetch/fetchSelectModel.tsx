import axios from 'axios';
import { BaseURL } from '../data/BaseURL';

const model_URL = `${BaseURL}/model`

export const fetchModel = (modelidx:number) =>
    axios.post(model_URL,{idx: modelidx}).then((res) => res.data);  