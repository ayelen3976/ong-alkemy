import logError from './Validation';
import alerts from '../../services/alerts/alerts';


const SendMessage = (name, email, message, required, props) => {
    logError(required, name, email)

    if(name === '' || email === '' || message === '') {
        alerts.info("Para enviar un mensaje", "Por favor, completa todos los campos")
    } else if(required.name !== '' || required.email !== '') {
        alert('confirme que sus datos esten bien ingresados')
    } else {
        const newContactMessage = { 
            name: name, 
            email: email,
            message: message
        }
        props.history.push("/")
        alerts.confirm("Gracias!", "su mensaje fue enviado correctamente", false)
        console.log(newContactMessage)
        // import here request function sending object newContactMessage 
    }
}

export default SendMessage;
