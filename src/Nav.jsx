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
      <div className="font-base text-lg">
        <span className="font-bold text-xl">{weekday},</span> {dayMonth}
      </div>

      <div className="text-lg font-medium">
        {tasksLength} {tasksLength > 1 ? "Tasks" : "Task"}
      </div>
    </nav>
  );
}

Nav.propTypes = {
  tasksLength: PropTypes.number,
};

export default Nav;
