import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskItem from "./components/TaskItem";
import EmptyTask from "./components/EmptyTask";
import FilterTask from "./components/FilterTask";
import ProgressBar from "./components/ProgressBar";

function App() {
  // Main TaskList
  const tasksList_StorageList = "TodoList";
  const [tasksList, setTaskList] = useState(() => {
    // Search the localStorage for a saved list
    const savedList = localStorage.getItem(tasksList_StorageList);
    if (savedList === null) {
      return [];
    } else {
      return JSON.parse(savedList);
    }
  });

  const tasksList_StorageFilter = "TodoListFilter";
  const [currentFilter, setCurrentFilter] = useState(() => {
    // Search the localStorage for a saved list
    const savedFilter = localStorage.getItem(tasksList_StorageFilter);
    if (savedFilter === null) {
      return "all";
    } else {
      return savedFilter;
    }
  });

  const filteredTasksList = tasksList.filter((task) => {
    if (currentFilter === "terminée") return !task.status;
    if (currentFilter === "à faire") return task.status;
    return true;
  });

  const totalTasks = tasksList.length;
  const doneTasks = tasksList.filter((task) => task.status === false).length;

  // REMINDER useEffect: est un hook, qui ecoute les changements (renders) effectués sur toute la page ou sur une variable useState
  useEffect(() => {
    localStorage.setItem(tasksList_StorageList, JSON.stringify(tasksList));
  }, [tasksList]);
  useEffect(() => {
    localStorage.setItem(tasksList_StorageFilter, currentFilter);
  }, [currentFilter]);
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
   * EditTask Function
   * @param {Int} taskIdToEdit
   * @returns {boolean}
   */
  const taskList_EditTask = (taskIdToEdit, newValue) => {
    if (tasksList.length !== 0) {
      const newTaskList = tasksList.map((task) => {
        if (task.id === taskIdToEdit) {
          return { ...task, name: newValue };
        }
        return task;
      });

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

  const taskList_FlterTasks = (filter) => {
    setCurrentFilter(filter);
  };

  // display manager
  let taskListDisplay = (
    <EmptyTask
      title={`Aucune tâche pour le moment`}
      message={`Ajoutez votre première tâche ci-dessus !`}
    />
  );

  if (tasksList.length > 0 && filteredTasksList.length === 0) {
    taskListDisplay = (
      <>
        {console.log("Filter> " + currentFilter)}
        <FilterTask
          taskList={tasksList}
          currentFilter={currentFilter}
          eventHandler={taskList_FlterTasks}
        />
        <EmptyTask
          title={`Aucune tâche ${currentFilter}`}
          message="Essayez un autre filtre ci-dessus !"
        />
      </>
    );
  } else if (filteredTasksList.length > 0) {
    taskListDisplay = (
      <>
        {console.log("Filter> " + currentFilter)}
        <FilterTask
          taskList={tasksList}
          currentFilter={currentFilter}
          eventHandler={taskList_FlterTasks}
        />
        {filteredTasksList.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleOnTaskDelete={taskList_DeleteTask}
            handleOnTaskEdit={taskList_EditTask}
            handleOnTaskCheck={taskList_CheckTask}
          />
        ))}
      </>
    );
  }

  return (
    <>
      <Header />
      {tasksList.length > 0 && (
        <ProgressBar totalTasks={totalTasks} doneTasks={doneTasks} />
      )}
      <AddTask handleClick_AddTask={taskList_AddTask} />

      {taskListDisplay}
    </>
  );
}

export default App;
