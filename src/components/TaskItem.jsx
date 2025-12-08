import "./TaskItem.css";

function TaskItem({ task = null, hundleOnTaskDelete, hundleOnTaskCheck }) {
  const hundle_OnTaskDelete = () => {
    hundleOnTaskDelete(task.id);
  };
  const hundle_OnTaskCheck = () => {
    hundleOnTaskCheck(task.id);
  };
  if (task === null) return <>{console.log("Invalid List")}</>;
  console.log(task);
  return (
    <div className="task-item" id={`task${task.id}`}>
      <input
        type="checkbox"
        name=""
        id={`taskChk${task.id}`}
        onChange={hundle_OnTaskCheck}
        checked={!task.status}
      />
      <label className={!task.status && `taskDone`}>{task.name}</label>
      <button type="button" onClick={hundle_OnTaskDelete}>
        ✕
      </button>
    </div>
  );
}

export default TaskItem;
