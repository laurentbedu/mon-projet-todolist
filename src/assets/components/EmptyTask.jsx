import "./EmptyTask.css";

function EmptyTask() {
  return (
    <div className="emptyTaskList">
      <img src="/assets/img/task.jpg" alt="" srcset="" />
      <h2>Aucune tâche pour le moment</h2>
      <p>Ajoutez votre première tâche ci-dessus !</p>
    </div>
  );
}

export default EmptyTask;
