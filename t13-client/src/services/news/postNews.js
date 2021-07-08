import axios from "axios";
import alerts from "../alerts/alerts";

export default async function postNews(news, history) {
  const baseUrl = process.env.REACT_APP_API_URL;
  const url = `${baseUrl}/news`;
  if (!news.title || !news.image || !news.content) {
    return alerts.info("", "todos los campos deben estar completos");
  }
  news.type = "news";
  try {
    const res = await axios.post(url, news);

    if (res.data.status === 400) {
      alerts.errorLogin(`${res.data.message}`);
    } else {
      alerts.confirm(`Se ha creado correctamente "${news.title}"`, true);
      history.push("/novedades");
    }
  } catch (error) {
    await alerts.error(`Cargar la actividad ${news.title}`);
  }
}
