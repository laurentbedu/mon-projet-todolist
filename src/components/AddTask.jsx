import "./AddTask.css";

function AddTask({ handleClick_AddTask }) {
  // Add new task
  const handleClickAddTask = () => {
    const txtBoxAddTask = document.querySelector(`#txtBoxAddTask`);
    if (txtBoxAddTask !== null && txtBoxAddTask.value !== "") {
      handleClick_AddTask(txtBoxAddTask.value)
        ? (txtBoxAddTask.value = "")
        : alert(
            "Une erreur est detectée lors de l'ajour de la nouvelle tâche."
          );
    }
  };
  return (
    <div className="addtask-container">
      <input
        type="text"
        id="txtBoxAddTask"
        placeholder="Ajouter une nouvelle tâche..."
      />
      <button className="buttonLg" onClick={handleClickAddTask}>
        Ajouter
      </button>
      <button className="buttonSm" onClick={handleClickAddTask}>
        +
      </button>
    </div>
  );
}

export default AddTask;
