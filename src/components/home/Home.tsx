import style from "./Home.module.css";
import { useFormik } from "formik";
import { useState } from "react";
import WeatherCard from "../weatherCard/WeatherCard";
import { IWeatherData } from "../../types/types";
import { useWeather } from "../context/WeatherContext";

interface IFormValues {
  city: string;
}

const API_ID = "82cf77ffe1306280ae53958c18d2fb66";

export default function Home() {
  const { addToHistory } = useWeather();
  const [weather, setWeather] = useState<IWeatherData>();
  const fetchWeather = async (city: string) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_ID}`
    );
    const data: IWeatherData = await res.json();
    setWeather(data);
  };

  const formic = useFormik({
    initialValues: {
      city: "",
    } as IFormValues,
    validateOnChange: false,
    onSubmit(values: IFormValues, { resetForm }) {
      fetchWeather(values.city);
      resetForm();
    },
  });
  const clearCurrentWeatherData = () => {
    setWeather(undefined);
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={formic.handleSubmit}>
        <input
          name="city"
          type="text"
          onChange={formic.handleChange}
          value={formic.values.city}
        />
        {formic.errors.city ? (
          <div className={style.error}>{formic.errors.city}</div>
        ) : (
          ""
        )}
        <button type="submit">Submit</button>
      </form>
      <div className={style.resultContainer}>
        {weather ? (
          <WeatherCard
            cityName={weather.name}
            temperature={weather.main.temp}
            icon={weather.weather[0].icon}
            saveWeather={() => {
              addToHistory(weather);
            }}
            deleteWeather={clearCurrentWeatherData}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
