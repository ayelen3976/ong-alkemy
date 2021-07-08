import axios from "axios";
import alerts from "../alerts/alerts";

export default async function getTestimonialsByID(id) {
  const baseUrl = process.env.REACT_APP_API_URL;
  const url = `${baseUrl}/testimonials/${id}`;

  try {
    const res = await axios.get(url);
    if (res.data.status === 500) {
      alerts.error("mostrar los testimonios");
    } else {
      return res.data;
    }
  } catch (error) {
    alerts.error("conectarse con el servidor");
  }
}
