
export interface IWeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type?: number;
    id?: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface IWeatherDataContext {
  history: IWeatherData[];
  deleteElementByIndex: (index: number) => void;
  setHistory: React.Dispatch<React.SetStateAction<IWeatherData[]>>;
  addToHistory: (data: IWeatherData) => void;
  clearHistory: () => void;
}
export interface IErrorServerResponse {
  cod: number;
  message: string;
}

export interface IErrorPageProps {
  errorText: string;
}

export interface IFormValues {
  city: string;
}