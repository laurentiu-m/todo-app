import PropTypes from "prop-types";

function Nav({ tasksLength }) {
  // Get today's date
  const date = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  // Format the date
  const formattedDate = date.toLocaleString("en-US", options);
  const [weekday, dayMonth] = formattedDate.split(", ");

  return (
    <nav className="flex flex-row justify-between place-items-center">
      <div className="font-base text-base lg:text-2xl">
        <span className="font-bold text-lg lg:text-3xl">{weekday},</span>{" "}
        {dayMonth}
      </div>

      <div className="text-lg font-medium lg:text-2xl">
        {tasksLength} {tasksLength > 1 ? "Tasks" : "Task"}
      </div>
    </nav>
  );
}

Nav.propTypes = {
  tasksLength: PropTypes.number,
};

export default Nav;
