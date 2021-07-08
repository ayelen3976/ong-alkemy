const logError = (required, name, email, phone) => {
    const validEmail = RegExp( 	
        /^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    );

    required.name = name.length <= 0
        ? "El nombre es requerido"
        : ""
    required.email = validEmail.test(email)
        ? "" 
        : "Ingresá un email válido (nombre@correo.com)"
    required.phone = phone.length == 10
        ? "" 
        : "El número debe contener 10 caracteres"
};

export default logError;