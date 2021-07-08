import { types } from "../types/types";


export function setCurrentUser(user) {
  return {
    type: types.SET_CURRENT_USER,
    payload: user,
  };
}
