import React, { useState } from "react";
import "./FilterTask.css";

function FilterTask({ taskList, currentFilter, eventHandler }) {
  const counterAll = taskList.length;
  const counterUndone = taskList.filter((task) => task.status === false).length;
  const counterDone = taskList.filter((task) => task.status === true).length;

  const [filter, setFilter] = useState(currentFilter);
  const filterClickHandler = (filter) => {
    setFilter(filter);
    eventHandler(filter);
  };
  return (
    <div className="filters">
      <button
        type="button"
        className={filter === "all" ? "active" : ""}
        onClick={(e) => filterClickHandler("all")}
      >
        Toutes ({counterAll})
      </button>
      <button
        type="button"
        className={filter === "à faire" ? "active" : ""}
        onClick={(e) => filterClickHandler("à faire")}
      >
        À faire ({counterDone})
      </button>
      <button
        type="button"
        className={filter === "terminée" ? "active" : ""}
        onClick={(e) => filterClickHandler("terminée")}
      >
        Terminées ({counterUndone})
      </button>
    </div>
  );
}

export default FilterTask;
