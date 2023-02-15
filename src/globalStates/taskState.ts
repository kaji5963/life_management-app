import { atom, RecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import { Tasks } from "../types/taskType";
import { AtomKeys } from "./recoilKeys";

//defaultではローカルストレージに保存
const { persistAtom } = recoilPersist();

// この記載でsessionStorageに保存
// const { persistAtom } = recoilPersist({
//   key: "recoil-persist",
//   storage: sessionStorage,
// });

export const taskState: RecoilState<Tasks[]> = atom({
  key: AtomKeys.TASK_STATE,
  default: [],
  effects_UNSTABLE: [persistAtom],
})