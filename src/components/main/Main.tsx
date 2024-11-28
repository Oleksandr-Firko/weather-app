import { Outlet } from "react-router-dom";
import style from "./main.module.css";

export default function Main() {
  return (
    <div className={style.container}>
      <Outlet />
    </div>
  );
}
