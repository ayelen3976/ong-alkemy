import validates from "../../services/validation/validation";

export const validation = (values) => {
  const errors = {};

  validates.validateEmail(values, errors);
  validates.validatePassword(values, errors);

  return errors;
};

export const initialValues = {
  email: "",
  password: "",
};
