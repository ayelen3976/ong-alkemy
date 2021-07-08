import axios from "axios";
import alerts from "../alerts/alerts";

export default async function postNewActivity(id, activity, history) {
    const baseUrl = process.env.REACT_APP_API_URL;
    const url = `${baseUrl}/activities/${id}`;

    var sendActivity = activity.name === "" ? activity.content : activity.name

    try {
        const res = await axios.put(url, sendActivity);
        if (res.data.status === 400) {
            alerts.errorLogin(`${res.data.message}`);
        } else {
            alerts.confirm(
                "Bien hecho!",
                "La actividad se ha creado correctamente",
                true
            );
            history.push("/");
        }
    } catch (error) {
        await alerts.error(`Editar la actividad ${activity.name}`);
        history.push("/");
    }
}
