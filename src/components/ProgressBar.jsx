import React from "react";
import "./ProgressBar.css";
function ProgressBar({ totalTasks, doneTasks }) {
  let undoneTasks = totalTasks - doneTasks;
  let percentage = Math.floor((doneTasks * 100) / totalTasks);
  return (
    <>
      <div className="progress-bar-containerMobile">
        <div className="top">
          <span className="title">Tâches restantes</span>
          <span className="counters">
            {doneTasks} / {totalTasks}
          </span>
        </div>

        <div className="middle">
          <div className="progressbar">
            <div
              className="progressbar-progressline"
              style={
                percentage === 100
                  ? { backgroundColor: "#389900ff", width: percentage + "%" }
                  : { backgroundColor: "#447ffd", width: percentage + "%" }
              }
            ></div>
          </div>
        </div>
        <div className="bottom">
          <span className="percentage">{percentage}% complétées</span>
        </div>
      </div>

      <div className="progress-bar-container">
        <div className="top">
          <span className="title">Progression</span>
          <span className="title2">Restantes</span>
        </div>
        <div className="top">
          <span className="counters">
            {doneTasks} / {totalTasks} terminées
          </span>
          <span className="counters2">{undoneTasks} tâches</span>
        </div>

        <div className="middle">
          <div className="progressbar">
            <div
              className="progressbar-progressline"
              style={
                percentage === 100
                  ? { backgroundColor: "#389900ff", width: percentage + "%" }
                  : { backgroundColor: "#447ffd", width: percentage + "%" }
              }
            ></div>
          </div>
        </div>
        <div className="bottom">
          <span className="percentage">
            {percentage}% de vos tâches sont complétées
          </span>
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
