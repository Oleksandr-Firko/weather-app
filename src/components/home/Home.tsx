import style from "./Home.module.css";
import { useFormik } from "formik";
import { useState } from "react";
import WeatherCard from "../weatherCard/WeatherCard";
import {
  IWeatherData,
  IFormValues,
  IErrorServerResponse,
} from "../../types/types";
import { useWeather } from "../context/WeatherContext";
import ErrorResponse from "../errorResponse/ErrorResponse";
import * as Yup from "yup";

const schema = Yup.object().shape({
  city: Yup.string().required(
    "This field is required. Please enter city name."
  ),
});

const API_ID = "82cf77ffe1306280ae53958c18d2fb66";

export default function Home() {
  const { addToHistory } = useWeather();
  const [weather, setWeather] = useState<IWeatherData>();
  const [isBadRequest, setRequestStatus] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const fetchWeather = async (city: string) => {
    setRequestStatus(false);
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_ID}`
    );
    if (res.ok) {
      const data: IWeatherData = await res.json();
      setWeather(data);
    } else {
      const data: IErrorServerResponse = await res.json();
      setErrorMessage(data.message);
      setRequestStatus(true);
    }
  };

  const formic = useFormik({
    initialValues: {
      city: "",
    } as IFormValues,
    validateOnChange: false,
    validationSchema: schema,
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
        <button type="submit">Submit</button>
      </form>
      <div className={style.resultContainer}>
        {weather && (
          <WeatherCard
            cityName={weather.name}
            temperature={weather.main.temp}
            icon={weather.weather[0].icon}
            saveWeather={() => {
              addToHistory(weather);
            }}
            deleteWeather={clearCurrentWeatherData}
          />
        )}
        {isBadRequest && <ErrorResponse errorText={errorMessage} />}
        {formic.errors.city && (
          <ErrorResponse errorText={String(formic.errors.city)} />
        )}
      </div>
    </div>
  );
}
