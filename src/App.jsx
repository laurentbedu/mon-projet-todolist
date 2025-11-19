import { useState } from "react";
import "./App.css";
import AddTask from "./assets/components/AddTask";
import Header from "./assets/components/Header";
import TaskItem from "./assets/components/TaskItem";
import EmptyTask from "./assets/components/EmptyTask";

function App() {
  // Main TaskList
  const [tasksList, setTaskList] = useState([]);

  /**
   *
   * @param {Array} list with key "id"
   * @returns 0 if list is null
   * @returns 1 if list is empty
   * @returns (int)ltaset id+1 if list is full
   */
  function newId(list) {
    if (!list) return 0;
    if (list.length === 0) return 1;

    const maxId = Math.max(...list.map((item) => item.id || 0));
    return maxId + 1;
  }

  const taskList_AddTask = (taskName) => {
    if (newId(tasksList) !== 0) {
      const newTaskList = [
        ...tasksList,
        { id: newId(tasksList), name: taskName, status: true },
      ];

      setTaskList(newTaskList);
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <Header />
      <AddTask handleClick_AddTask={taskList_AddTask} />
      {tasksList.length === 0 ? (
        <EmptyTask />
      ) : (
        tasksList.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </>
  );
}

export default App;
