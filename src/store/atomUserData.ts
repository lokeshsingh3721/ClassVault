import { atom } from "recoil";

export const atomUserData = atom({
  key: "atomUserData",
  default: {
    name: "",
  },
});
