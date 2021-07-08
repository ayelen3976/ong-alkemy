import axios from "axios";
import alerts from "../alerts/alerts";

export default async function getEntriesByID(id) {
  const baseUrl = process.env.REACT_APP_API_URL;
  const url = `${baseUrl}/news/${id}`;

  try {
    const res = await axios.get(url);
    if (res.data.status === 500) {
      alerts.error("mostrar las novedades");
    } else {
      return res.data;
    }
  } catch (error) {
    alerts.error("conectarse con el servidor");
  }
}