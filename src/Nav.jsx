import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <nav className="flex flex-row justify-between place-items-center">
      <FontAwesomeIcon className="h-6" icon={faBars} />
      <h2 className="font-bold text-xl">To-Do</h2>
    </nav>
  );
}

export default Nav;
