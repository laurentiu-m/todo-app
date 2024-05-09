import Nav from "./Nav";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function App() {
  return (
    <main className="font-sans p-4 h-screen space-y-5 bg-black text-white">
      <Nav />
      <TaskInput />
      <TaskList />
    </main>
  );
}

export default App;
