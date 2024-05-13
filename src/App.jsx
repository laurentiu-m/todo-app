import { useEffect, useState } from "react";
import Nav from "./Nav";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState(false);
  const tasksLength = tasks.length;

  // Get the tasks from local storage when the components mounts
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) setTasks(JSON.parse(storedTasks));
  }, []);

  // Handle the changes in the input value
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Add a new task to the list if it's not empty
  const addTask = (e) => {
    e.preventDefault();

    if (newTask.trim() !== "") {
      const updateTasks = [...tasks, newTask];
      setTasks(updateTasks);
      localStorage.setItem("tasks", JSON.stringify(updateTasks));
      setNewTask("");
      setError(false);
    } else {
      setError(true);
    }
  };

  // Delete a task from the list and update the local storage
  const deleteTask = (taskIndex) => {
    const updateTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(updateTasks);
    localStorage.setItem("tasks", JSON.stringify(updateTasks));
  };

  return (
    <main className="container mx-auto">
      <div className="flex flex-col mx-auto font-sans min-h-[calc(100dvh)] p-5 space-y-5 text-white sm:p-10 md:p-12 lg:w-[80%] lg:px-0 lg:py-14 xl:w-[65%]">
        <Nav tasksLength={tasksLength} />
        <TaskInput
          addTask={addTask}
          newTask={newTask}
          handleInputChange={handleInputChange}
          error={error}
        />
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </main>
  );
}

export default App;
