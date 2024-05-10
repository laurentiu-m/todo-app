import PropTypes from "prop-types";

function Nav({ tasksLength }) {
  const date = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const formattedDate = date.toLocaleString("en-US", options);
  const [weekday, dayMonth] = formattedDate.split(", ");

  return (
    <nav className="flex flex-row justify-between place-items-center">
      <div className="font-light text-sm">
        <span className="font-semibold text-base">{weekday},</span> {dayMonth}
      </div>

      <div className="text-sm">{tasksLength} Tasks</div>
    </nav>
  );
}

Nav.propTypes = {
  tasksLength: PropTypes.number,
};

export default Nav;
