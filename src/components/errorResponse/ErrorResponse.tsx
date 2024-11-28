import style from "./errorResponse.module.css";

export default function ErrorResponse() {
  return (
    <div className={style.container}>
      <h1>API Error</h1>
      <p>Something went wrong with API data</p>
    </div>
  );
}
