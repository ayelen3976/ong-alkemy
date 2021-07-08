import axios from "axios";
import alerts from "../alerts/alerts";

export default async function editTestimonials(id, testimonialsData, history) {
  const baseUrl = process.env.REACT_APP_API_URL;

  const url = `${baseUrl}/testimonials/${id}`;
  if (
    !testimonialsData.nombre ||
    !testimonialsData.imagen ||
    !testimonialsData.contenido
  ) {
    return alerts.info("", "todos los campos deben estar completos");
  } else {
    try {
      const res = await axios.patch(url, testimonialsData);

      if (res.data.status === 400) {
        alerts.errorLogin(`${res.data.message}`);
      } else {
        alerts.confirm(
          `Muchas gracias, ${testimonialsData.nombre} su testimonio ha sido editado correctamente`,
          true
        );
        history.push(`/testimonials/${id}`);
      }
    } catch (error) {
      alerts.error(
        `al intentar editar su testimonio, por favor ${testimonialsData.nombre} intente nuevamente`
      );
    }
  }
}
