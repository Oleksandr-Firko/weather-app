import { Link, NavLink } from "react-router-dom";
import style from "./header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <Link to={"/"}>
        <p>Weather app</p>
      </Link>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? style.linkActive : "")}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? style.linkActive : "")}
          to={"history"}
        >
          History
        </NavLink>
      </nav>
    </header>
  );
}
