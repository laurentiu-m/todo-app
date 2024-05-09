function TaskInput() {
  return (
    <form action="#" className="flex relative w-full place-items-center">
      <input
        type="text"
        className="w-full h-10 pl-2 pr-11 text-sm font-medium rounded bg-grey text-white focus:outline-blue focus:outline focus:outline-2 placeholder:font-semibold "
        placeholder="Add Task"
      />
      <button
        type="submit"
        className="absolute w-7 rounded right-2 font-medium text-black text-xl bg-blue"
      >
        +
      </button>
    </form>
  );
}

export default TaskInput;
