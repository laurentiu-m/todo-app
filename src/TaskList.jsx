import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import noTaskIcon from "./img/no-task.png";

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

      <div className="flex flex-col h-full gap-5 transition-all duration-200">
        {tasks.length !== 0 ? (
          tasks.map((task, index) => (
            <div
              key={index}
              className="group text-lg font-medium relative flex flex-row p-2 rounded items-center gap-3 transition-all duration-200 lg:hover:bg-grey lg:p-5 lg:gap-6"
            >
              <button
                id={`task-${index}`}
                onClick={() => handleButtonClick(index)}
                disabled={animationInProgress}
                className={`appearance-none flex justify-center items-center w-6 h-6 rounded border cursor-pointer transition-all duration-200 border-grey lg:group-hover:border-blue lg:border-2 lg:w-8 lg:h-8 ${
                  iconVisible[index] && "border-none bg-blue"
                }`}
              >
                {iconVisible[index] && (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-black lg:w-6 lg:h-6"
                  />
                )}
              </button>
              <p
                disabled={animationInProgress}
                className={`flex-1 flow-text break-words overflow-hidden lg:text-2xl ${
                  iconVisible[index] && "line-through"
                }`}
              >
                {task}
              </p>
            </div>
          ))
        ) : (
          <div className="flex flex-col justify-center items-center gap-5 h-[calc(55dvh)] md:gap-7 xl:gap-8">
            <h1 className="text-lg text-center w-[80%] font-medium md:text-2xl xl:w-full">
              Your task list is empty. Start by adding a new task!
            </h1>
            <img
              src={noTaskIcon}
              alt="no-task-icon"
              className="w-20 h-20 md:w-24 md:h-24"
            />
          </div>
        )}
      </div>
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  deleteTask: PropTypes.func,
};

export default TaskList;
