import cache from "memory-cache";
import { NextApiRequest, NextApiResponse } from "next";

type WeatherData = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number
    gust: number;
  };
  rain: {
    "1h": number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

const CACHE_KEY = "weatherData";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WeatherData>
) {
  const { lat, long } = req.query;

  const cacheKey = `${CACHE_KEY}-${lat}-${long}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    console.log('Retrieved weather data from cache');
    return res.status(200).json(cachedData);
  }

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=86a4f1f4650631bc99401e02eb902687`
  );
  const data = await response.json() as WeatherData;

  cache.put(cacheKey, data, 1000 * 60 * 10); // cache for 10 minutes

  console.log('Fetched weather data from API');

  return res.status(200).json(data);
}
