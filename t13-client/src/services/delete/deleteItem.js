import axios from 'axios';
import alerts from '../alerts/alerts';

export default async function remove(toDelete, route, id, history, path) {
  const baseUrl = process.env.REACT_APP_API_URL;
  const url = `${baseUrl}/${route}/${id}`;
  try {
    const res = await axios.delete(url);
      if (res.status === 200) {
        alerts.confirm(
          "Bien hecho!",
          `${toDelete} se ha eliminado correctamente`,
          true
        );
        history.push(`${path}`)
      } else {
        alerts.error(`No se pudo eliminar ${toDelete}`);
      }
  } catch (error) {
    if(error){
      alerts.error(`Ocurrió un error al intentar eliminar ${toDelete}`);
      history.push(`${path}`);
    }
  }
}
  