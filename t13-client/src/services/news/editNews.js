import axios from "axios";
import alerts from "../alerts/alerts";

export default async function editNews(id, news, history) {
  const baseUrl = process.env.REACT_APP_API_URL;

  const url = `${baseUrl}/news/${id}`;
  if (news.title === "" || news.image === "" || news.content === "") {
    return alerts.info("", "todos los campos deben estar completos");
  } else {
    try {
      const res = await axios.patch(url, news);

      if (res.data.status === 400) {
        alerts.errorLogin(`${res.data.message}`);
      } else {
        alerts.confirm(`Se ha creado correctamente ${news.title}`, true);
        history.push(`/novedades/${id}`);
      }
    } catch (error) {
      alerts.error(`Editar ${news.title}`);
    }
  }
}
