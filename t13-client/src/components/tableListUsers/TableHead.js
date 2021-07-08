import React from "react";

const TableHead = () => {
  return (
    <thead className='table__thead'>
      <tr className='thead_row'>
        <th className='thead__column'>Nombre</th>
        <th className='thead__column'>Apellido</th>
        <th className='thead__column'>Email</th>
        <th className='thead__column'>Opciones</th>
      </tr>
    </thead>
  );
};

export default TableHead;
