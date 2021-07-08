import setAuthorizationToken from "../../src/utils/setAuthorizationToken";
import { fetchWithToken } from "./../services/fetch/fetch";
import alerts from "./../services/alerts/alerts";
import { setCurrentUser } from "./auth";

// ------------------------------LOGIN----------------------------------
export function login({ email, password }) {
  return async (dispatch) => {
    const resp = await fetchWithToken(
      "users/auth/login",
      { email, password },
      "POST"
    );
    const body = await resp.json();

    if (body.ok) {
      const token = body.token;

      localStorage.setItem("jwtToken", token);
      setAuthorizationToken(token);
      const user = body.user;
      dispatch(
        setCurrentUser({
          id: user.id,
          firstName: user.firstName,
          email: user.email,
          roleId: user.roleId,
        })
      );
      alerts.confirm(
        `¡Bienvenido ${body.user.firstName}!`,
        "Nos alegra tenerte aquí nuevamente"
      );
      window.location.href = "/";
    } else {
      alerts.errorLogin(`${body.msg}`);
    }
  };
}
