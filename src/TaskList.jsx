import PropTypes from "prop-types";

function TaskList({ tasks }) {
  return (
    <div className="flex flex-col gap-5">
      <hr className="h-px bg-grey border-0" />

      <div className="flex flex-col gap-4">
        {tasks.map((task, index) => (
          <div key={index} className="flex flex-row place-items-center gap-3">
            <input
              id={`task-${index}`}
              type="checkbox"
              className="appearance-none w-4 h-4 rounded border border-grey"
            />
            <label htmlFor={`task-${index}`} className="text-sm font-medium">
              {task}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array,
};

export default TaskList;
