import React from "react";
import BackofficeDescription from "./BackofficeDescription";
import BackofficeSelect from "./BackofficeSelect";

const BackofficeNavbar = ({ firstName, role }) => {
  // arrays for example, delete this block when not needed
  const optionsAdmin = [
    "Editar novedad",
    "Crear novedad",
    "Listar usuarios",
    "Crear actividad",
  ];
  const optionsUser = ["Editar perfil"];

  return (
    <div className='backoffice__navbar'>
      <BackofficeDescription firstName={firstName} role={role} />
      <BackofficeSelect
        optionsSelect={role === "admin" ? optionsAdmin : optionsUser}
      />
    </div>
  );
};

export default BackofficeNavbar;
