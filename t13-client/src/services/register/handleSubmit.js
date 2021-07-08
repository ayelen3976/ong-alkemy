import axios from "axios";
import alerts from "../alerts/alerts";

export default async function handleSubmit(data, history) {
  const baseUrl = process.env.REACT_APP_API_URL;
  const url = `${baseUrl}/users/auth/register`;

  try {
    const res = await axios.post(url, data);
    if (res.data.status === 400) {
      alerts.errorLogin(`${res.data.message}`);
    } else {
      alerts.confirm(
        `Muchas gracias ${res.data.user.firstName}!`,
        "Su cuenta se ha creado exitosamente, inicia sesión para continuar",
        true
      );
      history.push("/inicio-sesion");
    }
  } catch (error) {
    alerts.error(`registrar el usuario`);
  }
}
