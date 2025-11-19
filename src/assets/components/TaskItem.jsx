import "./TaskItem.css";

function TaskItem({ task = null }) {
  if (task === null) return <>Invalid</>;
  return (
    <div className="task-item" id={`task${task.id}`}>
      <input type="checkbox" name="" id={task.id} />
      <label htmlFor={task.id}>{task.name}</label>
      <button type="button">✕</button>
    </div>
  );
}

export default TaskItem;
