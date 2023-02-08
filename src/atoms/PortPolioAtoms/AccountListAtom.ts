import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';
import { AccountListType } from "../../types/AccountListType";
const { persistAtom } = recoilPersist();

export const AccountListSelected = atom<AccountListType[]>({
  key: "AccountList",
  default: [],
  effects_UNSTABLE: [persistAtom],
});


export const AccountListCurrent = atom<AccountListType[]>({
  key: "AccountListCurrent",
  default: [],
  effects_UNSTABLE: [persistAtom],
});