import React, { useEffect, useState } from "react";
import Search from "../Search";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    fetchWeatherData(search);
  };

  const fetchWeatherData = async (param) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${param}&appid=83ffbc37aa5dd757ec6953c356792c88`
      );
      const result = await response.json();
      console.log(result);

      if (result) {
        setLoading(false);
        setWeatherData(result);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getCurrentDate = () => {
    const date = new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return date;
  };

  useEffect(() => {
    fetchWeatherData("Lucknow");
  }, []);

  return (
    <div className="flex flex-col items-center h-screen bg-black text-white">
      <h1 className="text-8xl font-medium mt-30">Weather App</h1>
      <div className="mt-20">
        <Search
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
      </div>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="text-center bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl px-30 py-15">
            <h2 className="text-3xl">
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
            <p className="mt-3 font-medium">{getCurrentDate()}</p>
            <h3 className="text-5xl mt-3">
              {Math.round(weatherData?.main?.temp)}°C
            </h3>
            <div className="flex flex-col gap-2 ">
              <p className="mt-5">Humidity: {weatherData?.main?.humidity}%</p>
              <p>Wind Speed: {weatherData?.wind?.speed} m/s</p>
              <p>
                Pressure: {weatherData?.main?.pressure} hPa
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
