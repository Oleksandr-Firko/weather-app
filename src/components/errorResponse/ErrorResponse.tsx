import style from "./errorResponse.module.css";
import { IErrorPageProps } from "../../types/types";

export default function ErrorResponse({ errorText }: IErrorPageProps) {
  return (
    <div className={style.container}>
      <h1>API Error</h1>
      <p>
        {errorText
          ? `"${errorText.toUpperCase()}"`
          : "Something went wrong with API data"}
      </p>
    </div>
  );
}
