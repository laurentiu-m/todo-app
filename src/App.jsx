import { useState } from "react";
import Nav from "./Nav";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([
    "Make breakfast",
    "Walk the dog",
    "Go to work",
  ]);
  const [newTask, setNewTask] = useState("");
  const tasksLength = tasks.length;

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();

    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (taskIndex) => {
    const updateTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(updateTasks);
  };

  return (
    <main className="font-sans p-4 h-screen space-y-5 bg-black text-white">
      <Nav tasksLength={tasksLength} />
      <TaskInput
        addTask={addTask}
        newTask={newTask}
        handleInputChange={handleInputChange}
      />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </main>
  );
}

export default App;
