import { useState } from "react";
import "./TaskItem.css";

function TaskItem({
  task = null,
  handleOnTaskDelete,
  handleOnTaskCheck,
  handleOnTaskEdit,
}) {
  const [taskEditing, setTaskEditing] = useState(false);
  const [taskName, setTaskName] = useState(task.name);
  const handle_OnTaskDelete = () => {
    if (taskEditing) {
      setTaskName(task.name);
      setTaskEditing(false);

      document.querySelector(".edit-btn").innerHTML = "✏️ Modifier";
    } else {
      handleOnTaskDelete(task.id, task.name);
    }
  };
  const handle_OnTaskCheck = () => {
    handleOnTaskCheck(task.id);
  };

  const taskEditingHandler = (event) => {
    const taskId = Number(event.target.dataset.task);

    if (taskEditing) {
      const editingDone = handleOnTaskEdit(taskId, taskName);
      if (editingDone) {
        event.target.innerHTML = "✏️ Modifier";
        setTaskEditing(false);
      }
    } else {
      event.target.innerHTML = "✓";
      setTaskEditing(true);
    }
  };

  let taskForm = !taskEditing ? (
    <label className={!task.status ? `taskDone` : ""}>{taskName}</label>
  ) : (
    <input
      type="text"
      name=""
      id=""
      data-task={task.id}
      value={taskName}
      onChange={(event) => setTaskName(event.target.value)}
      onKeyDown={(event) => {
        if (event.key === "Enter") taskEditingHandler(event);
      }}
    />
  );
  return (
    <div
      className={taskEditing ? "task-item editing" : "task-item"}
      id={`task${task.id}`}
    >
      <input
        type="checkbox"
        name=""
        id={`taskChk${task.id}`}
        onChange={handle_OnTaskCheck}
        checked={!task.status}
      />

      {taskForm}

      <button
        type="button"
        className="edit-btn"
        data-task={task.id}
        onClick={(event) => taskEditingHandler(event)}
      >
        ✏️ Modifier
      </button>
      <button
        type="button"
        className="delete-btn"
        onClick={handle_OnTaskDelete}
      >
        ✕ Supprimer
      </button>
    </div>
  );
}

export default TaskItem;
