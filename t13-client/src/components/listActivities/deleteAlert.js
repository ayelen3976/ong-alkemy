import swal from 'sweetalert';
import remove from '../../services/activities/removeActivity'

export default function deleteAlert(id, history) {
  swal({
    title: "¿Eliminar la actividad?",
    text: "No podrá recuperarla una ves realizada la acción!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      remove(id, history)
      swal("La actividad fue eliminada correctamente", {
        icon: "success",
      });
    } else {
      swal("La actividad fue conservada");
    }
  });
}