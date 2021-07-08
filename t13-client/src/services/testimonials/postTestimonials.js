import axios from "axios";
import alerts from "../alerts/alerts";

export default async function postTestimonials(testimonialsData, history) {
  const baseUrl = process.env.REACT_APP_API_URL;
  const url = `${baseUrl}/testimonials/`;
  if (
    !testimonialsData.name ||
    !testimonialsData.image ||
    !testimonialsData.content
  ) {
    return alerts.info("", "todos los campos deben estar completos");
  }
  try {
    const res = await axios.post(url, testimonialsData);

    if (res.data.status === 400) {
      alerts.errorLogin(`${res.data.message}`);
    } else {
      alerts.confirm(
        `Muchas gracias por su aporte ${testimonialsData.name}!`,
        true
      );
      history.push("/testimonials");
    }
  } catch (error) {
    await alerts.error(
      `al intentar agregar su testimonio, por favor ${testimonialsData.name} intente nuevamente`
    );
  }
}
