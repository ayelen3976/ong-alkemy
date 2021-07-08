export default {
  validateFirstName: (values, errors) => {
    if (!values.firstName) {
      errors.firstName = "El nombre es requerido.";
    } else if (
      !/^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{0,}$/.test(values.firstName) ||
      values.firstName.includes(".")
    ) {
      errors.firstName =
        "El nombre no debe contener caracteres especiales (numeros, signos, etc).";
    }
  },
  validateLastName: (values, errors) => {
    if (!values.lastName) {
      errors.lastName = "El apellido es requerido.";
    } else if (
      !/^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{0,}$/.test(values.lastName) ||
      values.lastName.includes(".")
    ) {
      errors.lastName =
        "El apellido no debe contener caracteres especiales (numeros, signos, etc).";
    }
  },
  validateEmail: (values, errors) => {
    if (!values.email) {
      errors.email = "El email es requerido.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
      errors.email = "Ingrese un email válido.";
    }
  },
  validatePassword: (values, errors) => {
    if (!values.password) {
      errors.password = "La contraseña es requerida";
    } else if (values.password.length < 6) {
      errors.password = "La contraseña debe tener como mínimo 6 caracteres.";
    }
  },
  validateImage: (values, errors) => {
    if (!values.password) {
      errors.password = "La contraseña es requerida";
    } else if (values.password.length < 6) {
      errors.password = "La contraseña debe tener como mínimo 6 caracteres.";
    }
  },
};
