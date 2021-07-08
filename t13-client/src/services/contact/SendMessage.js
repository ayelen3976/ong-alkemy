
import axios from "axios";
import alerts from "../alerts/alerts";
import logError from "../../components/contact/Validation";

export default async function SendMessage(
  name,
  email,
  phone,
  message,
  required,
  props
) {
  logError(required, name, email, phone);
  const baseUrl = process.env.REACT_APP_API_URL;
  const url = `${baseUrl}/contacts`;

  if(!name || !email || !phone || !message) {
    alerts.info("Para enviar un mensaje", "Por favor, completa todos los campos")
  } else if(required.name || required.email || required.phone) {
    alerts.info('confirme que sus datos esten bien ingresados', "")
  } else {
    const newContactMessage = { 
        name, email, message, phone
    }
    try {
      const res = await axios.post(url, newContactMessage);
  
      if (res.data.status === 400) {
        alerts.error(`${res.data.message}`);
      } else {
        alerts.confirm(
          `Muchas gracias ${name}, el mensaje se ha enviado correctamente`,
          false
        );
        props.history.push("/");
      }
    } catch (error) {
      await alerts.error("Ocurrió un error inesperado al intentar enviar su mensaje");
      props.history.push("/");
    }
  }
}
