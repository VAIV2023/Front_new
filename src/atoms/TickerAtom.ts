import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const tossTicker = atom({
  key: "tossTicker",
  default: "000000",
});