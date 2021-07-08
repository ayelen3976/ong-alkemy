import swal from 'sweetalert';
import remove from '../../services/delete/deleteItem'

export default function deleteAlert( toDelete ,route, id) {
  swal({
    title: "¿Eliminar la novedad?",
    text: "No podrá recuperarla una ves realizada la acción!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      remove(toDelete ,route, id)
      swal("La novedad fue eliminada correctamente", {
        icon: "success",
      });
    } else {
      swal("La novedad fue conservada");
    }
  });
}