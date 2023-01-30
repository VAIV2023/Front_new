import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const isClicked = atom({
  key: "isClicked",
  default: false,
});