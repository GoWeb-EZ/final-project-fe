import { atom } from "recoil";

// User.js
// 로그인 상태
export const userState = atom({
  key: "userState",
  default: null,
});
