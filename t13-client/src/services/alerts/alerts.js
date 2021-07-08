import swal from 'sweetalert';
import remove from '../delete/deleteItem';

const alerts = {
  confirm: (title, text, button) => swal(
    `${title}`, 
    `${text}`, 
    "success",
    { button: button,
      timer: !button ? 3000 : ""
    }
  ),
  errorLogin: err => swal(
    `${err}`,
    "",
    "error",
    { button: "Entendido"}
  ),
  error: err => swal(
    `${err}`, 
    "",
    "error", 
    { button: "Entendido"}
  ),
  info: (title, info) => swal(
    `${title}`, 
    `${info}`, 
    "info",
    { button: "Entendido" }
  ),
  delete: (toDelete, route, id, history ) => swal({
    title: `¿Eliminar ${toDelete}?`,
    text: "Una ves hecho, no se podrá recuperar",
    icon: "warning",
    buttons: true,
    dangerMode: true
  })
  .then((willDelete) => {
    if (willDelete) {
      // create a case to execute the remove function
      switch (toDelete) {
        case "la actividad":
          remove(toDelete, route, id, history, "/backoffice/lista-actividades")
          break;
        case "la categoría":
          remove(toDelete, route, id, history, "/backoffice/lista-categorías")
          break;  
        default:
          break;
      }
      swal(`${toDelete} se ha eliminado`, {
        icon: "success"
      });
    } else {
      swal(`${toDelete} se conservó correctamente`);
    }
  })
} 

export default alerts;
