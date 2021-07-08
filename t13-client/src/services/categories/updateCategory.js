import Axios from "axios";
import alert from "../alerts/alerts";

export default async function updateCategory(category, history) {
  const baseUrl = process.env.REACT_APP_API_URL;
  const { id, name, description } = category;
  const url = `${baseUrl}/categories/${id}`;

  const dataCategory = { name, description };

  try {
    await Axios.put(url, dataCategory);
    alert.confirm(
      "¡Genial!",
      "La categoría se ha actualizado correctamente",
      "Entendido"
    );
    history.push("/backoffice/categories");
  } catch (error) {
    alert.error("Error al editar la categoría");
  }
}
