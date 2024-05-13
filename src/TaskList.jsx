import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function TaskList({ tasks, deleteTask }) {
  const [iconVisible, setIconVisible] = useState({});
  const [animationInProgress, setAnimationInProgress] = useState(false);

  // Set all the checkbox icons to be invisible when tasks changes
  useEffect(() => {
    const initialIconVisible = {};
    tasks.forEach((_, index) => {
      initialIconVisible[index] = false;
    });
    setIconVisible(initialIconVisible);
  }, [tasks]);

  // Handle button click to start the animation and delete task
  const handleButtonClick = (index) => {
    // Return if the animation is active
    if (animationInProgress) return;

    // Start the animation and set icon visible
    setAnimationInProgress(true);
    setIconVisible((prev) => ({
      ...prev,
      [index]: true,
    }));

    // Delete the task and finish the animation after 500 ms
    setTimeout(() => {
      deleteTask(index);
      setAnimationInProgress(false);
    }, 700);
  };

  return (
    <div className="flex flex-col gap-5">
      <hr className="h-px bg-grey border-0" />

      <div className="flex flex-col gap-5 transition-all ease-in-out duration-200">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="group text-lg font-medium relative flex flex-row cursor-pointer p-2 rounded items-center gap-3 lg:hover:bg-grey"
          >
            <button
              id={`task-${index}`}
              onClick={() => handleButtonClick(index)}
              disabled={animationInProgress}
              className={`appearance-none flex justify-center items-center w-6 h-6 rounded border cursor-pointer border-grey lg:group-hover:border-blue
              transition ease-in-out duration-200 ${
                iconVisible[index] && "border-none bg-blue"
              }`}
            >
              {iconVisible[index] && (
                <FontAwesomeIcon icon={faCheck} className="text-black" />
              )}
            </button>
            <p
              disabled={animationInProgress}
              className={`flex-1 flow-text break-words cursor-pointer overflow-hidden ${
                iconVisible[index] && "line-through"
              }`}
            >
              {task}
            </p>
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
