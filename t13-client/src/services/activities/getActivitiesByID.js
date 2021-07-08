import axios from "axios";

import alerts from "../alerts/alerts";

export default async function getActivitiesByID(id) {
  const baseUrl = process.env.REACT_APP_API_URL;
  const url = `${baseUrl}/activities/${id}`;

  try {
    const res = await axios.get(url);

    if (res.data.status === 500) {
      alerts.error("mostrar las actividades");
    } else {
      return res.data;
    }
  } catch (error) {
    alerts.error("conectarse con el servidor");
  }
}
