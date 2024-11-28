import WeatherCard from "../weatherCard/WeatherCard";
import { useWeather } from "../context/WeatherContext";
import style from "./history.module.css";
import { IWeatherData } from "../../types/types";

export default function History() {
  const { history, clearHistory, deleteElementByIndex } = useWeather();
  return (
    <div className={style.container}>
      <div className={style.weatherContainer}>
        {history.map((weather: IWeatherData, index: number) => {
          const deleteData = () => {
            deleteElementByIndex(index);
          };
          return (
            <WeatherCard
              key={index}
              cityName={weather.name}
              temperature={weather.main.temp}
              icon={weather.weather[0].icon}
              deleteWeather={deleteData}
            />
          );
        })}
      </div>
      {history[0] ? (
        <button className={style.deleteBtn} onClick={clearHistory}>
          Delete all cards
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
