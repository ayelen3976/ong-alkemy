import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import "./tableUsers.css";

const TableContainer = () => {
  return (
    <>
      {
        // Acá iría el titulo
      }
      <table className='table'>
        <TableHead />
        <TableBody />
      </table>
    </>
  );
};

export default TableContainer;
