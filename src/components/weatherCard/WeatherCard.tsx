import { useLocation } from "react-router-dom";
import style from "./weatherCard.module.css";

interface IWeatherCardProps {
  cityName: string;
  temperature: number;
  icon: string;
  saveWeather?: () => void;
  deleteWeather?: () => void | undefined;
}

export default function WeatherCard({
  cityName,
  temperature,
  icon,
  saveWeather,
  deleteWeather,
}: IWeatherCardProps): JSX.Element {
  const location = useLocation();
  return (
    <div className={style.container}>
      <div className={style.topCardPart}>
        <div className={style.leftBox}>
          <span className={style.temperature}>
            {(temperature - 273.15).toFixed(1)}°
          </span>
          <span className={style.city}>{cityName}</span>
        </div>
        <div className={style.weatherIconsWrapper}>
          <img
            src={`https://openweathermap.org/img/w/${icon}.png`}
            alt="weather-icon"
          />
          <img
            src={`https://openweathermap.org/img/w/${icon}.png`}
            alt="weather-icon"
          />
          <img
            src={`https://openweathermap.org/img/w/${icon}.png`}
            alt="weather-icon"
          />
        </div>
      </div>
      <div className={style.buttonBox}>
        {location.pathname === "/" ? (
          <button className={style.btn} onClick={saveWeather}>
            Save
          </button>
        ) : (
          ""
        )}
        <button className={style.btn} onClick={deleteWeather}>
          Delete
        </button>
      </div>
    </div>
  );
}
