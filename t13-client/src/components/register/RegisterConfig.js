import validates from "../../services/validation/validation";

export const validation = (values) => {
  const errors = {};

  validates.validateFirstName(values, errors);
  validates.validateLastName(values, errors);
  validates.validateEmail(values, errors);
  validates.validatePassword(values, errors);

  return errors;
};

export const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
