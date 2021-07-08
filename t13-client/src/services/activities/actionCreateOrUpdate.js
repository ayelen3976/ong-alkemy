import alerts from '../alerts/alerts';
import postNewActivity from './postNewActivity';
import editActivity from './editActivity';

export default function actionCreateOrUpdate(
  activity,
  newActivity,
  history,
  setNewActivity,
  setActivity
) {
  const activityIsEmpty = Object.keys(activity).length === 0

  if ((!newActivity.name || !newActivity.content) && activityIsEmpty) {
    alerts.info("Por favor,", "Completa ambos campos")

  } else if (!newActivity.name && !newActivity.content) {
    alerts.info("Vuelva a intentar,", "No hay nada modificado")

  } else if (activityIsEmpty) {
    postNewActivity(newActivity, history);
    setNewActivity({ name: '', content: '' });
    
  } else {
    editActivity(activity.id, newActivity, history)
    setActivity({})
  }
}