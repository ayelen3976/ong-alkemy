import Axios from "axios";
import alert from "../alerts/alerts";

export default async function getMembers() {
  const baseUrl = process.env.REACT_APP_API_URL;
  const url = `${baseUrl}/members/`;

  try {
    const res = await Axios.get(url);
    return res.data.membersList;
  } catch (error) {
    alert.error("Error al obtener los miembros");
  }
}
