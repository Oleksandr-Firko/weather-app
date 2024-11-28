import { createContext, useContext, useState } from "react";
import { IWeatherData, IWeatherDataContext } from "../../types/types";

interface IAuthContextProps {
  children: React.ReactNode;
}

export const WeatherContext = createContext<IWeatherDataContext | undefined>(
  undefined
);

export default function WeatherProvider({ children }: IAuthContextProps) {
  const [history, setHistory] = useState<IWeatherData[]>([]);

  const addToHistory = (data: IWeatherData): void => {
    setHistory((prevHistory) => [...prevHistory, data]);
  };

  const clearHistory = (): void => {
    setHistory([]);
  };

  const deleteElementByIndex = (index: number): void => {
    const copyHistory: IWeatherData[] = [...history];
    copyHistory.splice(index, 1);
    setHistory(copyHistory);
  };

  return (
    <WeatherContext.Provider
      value={{
        history,
        setHistory,
        addToHistory,
        clearHistory,
        deleteElementByIndex,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("no such context");
  }
  return context;
};
