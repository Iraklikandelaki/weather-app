import React from "react";
import WeatherCard from "./WeatherCard";
// type test0 = Awaited<typeof promise>

const Weather: React.FC = (props) => {
  const getLoc = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  };

  const showPosition = (position: GeolocationPosition) => {
    console.log(position);
    fetchWeatherData(position.coords.latitude, position.coords.longitude);
  };
  const fetchWeatherData = async <T,>(
    lat: number,
    long: number
  ): Promise<T> => {
    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=10fdc5afd512477592b142623220605&q=${lat},${long}`
    );
    const resJSON = await res.json();
    return resJSON;
  };

  getLoc();
  return (
    <div className="weather-parent">
      <WeatherCard />
    </div>
  );
};

export default Weather;
