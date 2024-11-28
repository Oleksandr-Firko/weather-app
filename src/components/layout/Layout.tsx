import Header from "../header/Header";
import Main from "../main/Main";
import style from "./layout.module.css";

export default function Layout() {
  return (
    <div className={style.container}>
      <Header />
      <Main />
    </div>
  );
}
