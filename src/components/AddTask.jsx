import { useState } from "react";
import "./AddTask.css";

function AddTask({ handleClick_AddTask }) {
  const [inputValue, setInputValue] = useState("");

  // Add new task
  const handleClickAddTask = () => {
    if (inputValue !== null && inputValue !== "") {
      handleClick_AddTask(inputValue)
        ? setInputValue("")
        : alert(
            "Une erreur est detectée lors de l'ajour de la nouvelle tâche."
          );
    }
  };
  return (
    <div className="addtask-container">
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") handleClickAddTask();
        }}
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
