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
          className="w-full h-14 pl-3 pr-14 text-lg font-medium rounded bg-grey text-white focus:outline-blue focus:outline focus:outline-2 placeholder:font-semibold lg:h-20 lg:pl-5 lg:text-2xl lg:pr-20"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add Task"
        />
        <button
          type="submit"
          className="absolute w-10 h-10 rounded right-2 font-medium text-black text-3xl bg-blue lg:w-14 lg:h-14 lg:right-3 lg:text-4xl"
        >
          +
        </button>
      </form>
      {error && (
        <p className="text-base text-red-500 font-light lg:text-lg">
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
