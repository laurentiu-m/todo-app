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

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };

  console.log(tasks);

  return (
    <main className="font-sans p-4 h-screen space-y-5 bg-black text-white">
      <Nav />
      <TaskInput
        addTask={addTask}
        newTask={newTask}
        handleInputChange={handleInputChange}
      />
      <TaskList tasks={tasks} />
    </main>
  );
}

export default App;
