import setAuthorizationToken from "../../src/utils/setAuthorizationToken";
import {setCurrentUser} from './auth';

export function logout() {
    return (dispatch) => {
      localStorage.removeItem("jwtToken");
      localStorage.clear();
      setAuthorizationToken(false);
      dispatch(setCurrentUser({}));
    };
  }