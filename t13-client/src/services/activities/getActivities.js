import axios from "axios";
import alerts from "../alerts/alerts";

export default async function getActivities(history) {
  const baseUrl = process.env.REACT_APP_API_URL;
  const url = `${baseUrl}/activities/`;

  try {
    const res = await axios.get(url);
    if (res.data.status === 500) {
      alerts.error("mostrar las actividades");
    } else if (res.data.status === 400) {
      alerts.info("¡Ups!", "Al parecer, no hay actividades para mostrar aún")
      history.push("/backoffice/agregar-actividades")
    } else {
      return res.data;
    }
  } catch (error) {
    alerts.error("conectarse con el servidor");
  }
}
