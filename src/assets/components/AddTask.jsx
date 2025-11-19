import "./AddTask.css";

function AddTask({ handleClick_AddTask }) {
  const handleClick = () => {
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
      <button className="buttonLg" onClick={handleClick}>
        Ajouter
      </button>
      <button className="buttonSm" onClick={handleClick}>
        +
      </button>
    </div>
  );
}

export default AddTask;
