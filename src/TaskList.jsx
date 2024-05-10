import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function TaskList({ tasks, deleteTask }) {
  const [iconVisible, setIconVisible] = useState({});

  useEffect(() => {
    const initialIconVisible = {};
    tasks.forEach((_, index) => {
      initialIconVisible[index] = false;
    });
    setIconVisible(initialIconVisible);
  }, [tasks]);

  const handleButtonClick = (index) => {
    setIconVisible((prev) => ({
      ...prev,
      [index]: true,
    }));

    setTimeout(() => {
      deleteTask(index);
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-5">
      <hr className="h-px bg-grey border-0" />

      <div className="flex flex-col gap-2 transition-all ease-in-out duration-200">
        {tasks.map((task, index) => (
          <div
            key={index}
            onClick={() => handleButtonClick(index)}
            className="group text-sm font-medium relative flex flex-row cursor-pointer p-2 rounded items-center gap-3 sm:hover:bg-grey"
          >
            <button
              id={`task-${index}`}
              onClick={() => handleButtonClick(index)}
              className={`appearance-none flex justify-center items-center w-4 h-4 rounded border cursor-pointer border-grey sm:group-hover:border-blue
              transition ease-in-out duration-200 ${
                iconVisible[index] && "border-none bg-blue"
              }`}
            >
              {iconVisible[index] && (
                <FontAwesomeIcon
                  icon={faCheck}
                  className="w-3 h-3 text-black"
                />
              )}
            </button>
            <span
              className={`cursor-pointer ${
                iconVisible[index] && "line-through"
              }`}
            >
              {task}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  deleteTask: PropTypes.func,
};

export default TaskList;
