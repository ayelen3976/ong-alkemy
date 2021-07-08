import axios from "axios";
import alerts from "../alerts/alerts";

export default async function postNewActivity(activity, history) {
  const baseUrl = process.env.REACT_APP_API_URL;
  const url = `${baseUrl}/activities`;

  try {
    const res = await axios.post(url, activity);
    if (res.data.status === 400) {
      alerts.error("crear la actividad");
    } else {
      alerts.confirm(
        "Bien hecho!",
        "La actividad se ha creado correctamente",
        true
      );
      history.push("/");
    }
  } catch (error) {
    await alerts.error(`Cargar la nueva actividad ${activity.name}`);
    history.push("/");
  }
}
