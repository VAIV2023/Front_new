import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const TodaysPickModalOpen = atom({
  key: "TodaysPickModalOpen",
  default: false,
  effects_UNSTABLE: [persistAtom],
});


export const NowTicker = atom<string>({
    key: "NowTicker",
    default: "",
    effects_UNSTABLE: [persistAtom],
});

export const NowModalStock = atom<string | undefined>({
    key: "NowModalStock",
    default: "",
    effects_UNSTABLE: [persistAtom],
}); 

