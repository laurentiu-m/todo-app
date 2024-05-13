import PropTypes from "prop-types";

function TaskInput({ addTask, newTask, handleInputChange, error }) {
  return (
    <>
      <form
        onSubmit={addTask}
        className="flex relative w-full place-items-center"
      >
        <input
          type="text"
          className="w-full h-14 pl-3 pr-12 text-lg font-medium rounded bg-grey text-white focus:outline-blue focus:outline focus:outline-2 placeholder:font-semibold "
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add Task"
        />
        <button
          type="submit"
          className="absolute w-10 h-10 rounded right-2 font-medium text-black text-3xl bg-blue"
        >
          +
        </button>
      </form>
      {error && (
        <p className="text-base text-red-500 font-light">
          Please enter a task before adding.
        </p>
      )}
    </>
  );
}

TaskInput.propTypes = {
  addTask: PropTypes.func,
  newTask: PropTypes.string,
  handleInputChange: PropTypes.func,
  error: PropTypes.bool,
};

export default TaskInput;
