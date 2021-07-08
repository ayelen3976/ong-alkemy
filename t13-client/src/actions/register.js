import setAuthorizationToken from "../../src/utils/setAuthorizationToken";
import { fetchWithoutToken } from "./../services/fetch/fetch";
import alerts from "./../services/alerts/alerts";
import { setCurrentUser } from "./auth";

export function register({ email, password, firstName, lastName }) {
  return async (dispatch) => {
    const resp = await fetchWithoutToken(
      "users/auth/register",
      { email, password, firstName, lastName },
      "POST"
    );
    const body = await resp.json();
    if (body.ok) {
      const token = body.token;

      localStorage.setItem("jwtToken", token);
      setAuthorizationToken(token);

      const register = body.user;
      dispatch(
        setCurrentUser({
          id: register.id,
          firstName: register.firstName,
          email: register.email,
          roleId: register.roleId,
        })
      );
      alerts.confirm(
        `Muchas gracias ${body.user.firstName}!`,
        "Su cuenta se ha creado exitosamente, inicia sesión para continuar",
        true
      );
      window.location.href = "/";
    } else {
      alerts.error(`${body.msg}`);
    }
  };
}
