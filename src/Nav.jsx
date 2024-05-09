function Nav() {
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

      <div className="text-sm">12 Tasks</div>
    </nav>
  );
}

export default Nav;
