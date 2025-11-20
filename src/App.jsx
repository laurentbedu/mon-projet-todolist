import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskItem from "./components/TaskItem";
import EmptyTask from "./components/EmptyTask";

function App() {
  // Main TaskList
  const tasksList_StorageName = "TodoList";
  const [tasksList, setTaskList] = useState(() => {
    // Search the localStorage for a saved list
    const savedList = localStorage.getItem(tasksList_StorageName);
    if (savedList === null) {
      return [];
    } else {
      return JSON.parse(savedList);
    }
  });

  // useEffect: est un hook, qui ecoute les changements (renders) effectués sur toute la page ou sur une variable useState
  useEffect(() => {
    localStorage.setItem(tasksList_StorageName, JSON.stringify(tasksList));
  }, [tasksList]);
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

  /**
   * AddTask Function
   * @param {String} taskName
   * @returns {Boolean}
   */
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

  /**
   * DeleteTask Function
   * @param {Int} taskIdToDelete
   * @returns {boolean}
   */
  const taskList_DeleteTask = (taskIdToDelete) => {
    if (tasksList.length !== 0) {
      const newTaskList = tasksList.filter(
        (task) => task.id !== taskIdToDelete
      );

      setTaskList(newTaskList);
      return true;
    } else {
      return false;
    }
  };

  /**
   * CheckTask Function
   * @param {Int} taskIdToDelete
   * @returns {boolean}
   */
  const taskList_CheckTask = (taskIdToCheck) => {
    if (tasksList.length !== 0) {
      const newTaskList = [...tasksList];
      newTaskList.map(
        (task) => task.id === taskIdToCheck && (task.status = !task.status)
      );
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
        tasksList.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            hundleOnTaskDelete={taskList_DeleteTask}
            hundleOnTaskCheck={taskList_CheckTask}
          />
        ))
      )}
    </>
  );
}

export default App;
