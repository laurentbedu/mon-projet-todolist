import { useState } from "react";
import "./App.css";
import AddTask from "./assets/components/AddTask";
import Header from "./assets/components/Header";

function App() {
  const [tasksList, setTaskList] = useState([]);

  const taskList_AddTask = (taskName) => {
    const newTaskList = [...tasksList, { name: taskName, status: true }];
    setTaskList(newTaskList);
    return true;
  };
  console.log(tasksList);
  return (
    <>
      <Header />
      <AddTask handleClick_AddTask={taskList_AddTask} />
    </>
  );
}

export default App;
