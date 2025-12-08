import "./EmptyTask.css";

function EmptyTask({ title, message }) {
  return (
    <div className="emptyTaskList">
      <img src="/assets/img/task.jpg" alt="Aucune tâche" />
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default EmptyTask;
