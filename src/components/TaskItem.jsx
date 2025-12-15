import { useState, useEffect } from "react";
import "./TaskItem.css";

function TaskItem({
  task = null,
  handleOnTaskDelete,
  handleOnTaskCheck,
  handleOnTaskEdit,
}) {
  const [taskEditing, setTaskEditing] = useState(false);
  const [taskName, setTaskName] = useState(task.name);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  // Detection ecran avec un evenetListener
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getEditButtonLabel = () => {
    if (taskEditing) return isMobile ? "✓" : "✓ Valider"; 
    return isMobile ? "✏️" : "✏️ Modifier";
  };

  const handle_OnTaskDelete = () => {
    if (taskEditing) {
      setTaskName(task.name);
      setTaskEditing(false);
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
        setTaskEditing(false);
      }
    } else {
      setTaskEditing(true);
    }
  };

  return (
    <div
      className={taskEditing ? "task-item editing" : "task-item"}
      id={`task${task.id}`}
    >
      <input
        type="checkbox"
        id={`taskChk${task.id}`}
        onChange={handle_OnTaskCheck}
        checked={!task.status}
      />

      {!taskEditing ? (
        <label className={!task.status ? `taskDone` : ""}>{taskName}</label>
      ) : (
        <input
          type="text"
          data-task={task.id}
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") taskEditingHandler(e);
          }}
        />
      )}

      <button
        type="button"
        className="edit-btn"
        data-task={task.id}
        onClick={taskEditingHandler}
      >
        {getEditButtonLabel()}
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
