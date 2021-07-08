import Axios from "axios";
import alert from "../alerts/alerts";

export default async function getCategory(id) {
  const baseUrl = process.env.REACT_APP_API_URL;
  const url = id ? `${baseUrl}/categories/${id}` : `${baseUrl}/categories`

  try {
    const res = await Axios.get(url);
    if (res.status === 404 || res.status === 400) {
      return alert.error("La categoría no existe.");
    }
    return res.data;
  } catch (error) {
    alert.error("Error al obtener la categoría");
  }
}
