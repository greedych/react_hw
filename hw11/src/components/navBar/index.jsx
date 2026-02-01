import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to={"/"}>Main</NavLink>
      <NavLink to={"list"}>Article List</NavLink>
    </div>
  );
}

export default NavBar;
