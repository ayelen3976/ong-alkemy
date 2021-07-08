import Axios from "axios";
import alert from "../alerts/alerts";

export default async function postCategory(category) {
  const baseUrl = process.env.REACT_APP_API_URL;
  const url = `${baseUrl}/categories`;

  try {
    await Axios.post(url, category);
    alert.confirm(
      "¡Genial!",
      "La categoría se ha agregado correctamente",
      "Entendido"
    );
  } catch (error) {
    alert.error("Error al agregar la categoría");
  }
}
