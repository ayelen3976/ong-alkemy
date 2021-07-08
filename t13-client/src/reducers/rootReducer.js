import logReducer from "./isLogin"
import { combineReducers } from "redux";
import organization from './organizationReducer'
import auth from './auth';
export const rootReducer = combineReducers({
  //
  //   auth: authReducer,
  //   novedades: novedadesReducer,
  logReducer,
  auth: auth,
  organization: organization,
});
