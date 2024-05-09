import Nav from "./Nav";
import TaskInput from "./TaskInput";

function App() {
  return (
    <main className="font-sans p-7 h-screen space-y-8 bg-black text-white">
      <Nav />
      <TaskInput />
      <div>ToDo Tasks</div>
    </main>
  );
}

export default App;
