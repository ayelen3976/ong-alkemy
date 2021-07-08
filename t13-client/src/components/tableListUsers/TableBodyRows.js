import React from "react";
import ButtonDelete from "../buttons/ButtonDelete";
import ButtonEdit from "../buttons/ButtonEdit";
import usersInfo from "./usersInfo";

const TableBodyRows = () => {
  return usersInfo.map(({ id, firstName, lastName, email }) => (
    <tr key={id} className='tbody__row'>
      <td className='tbody__column'>{firstName}</td>
      <td className='tbody__column'>{lastName}</td>
      <td className='tbody__column'>{email}</td>
      <td className='tbody__column'>
        <ButtonEdit className='tbody__button--edit' />
        <ButtonDelete className='tbody__button--delete' />
      </td>
    </tr>
  ));
};

export default TableBodyRows;
