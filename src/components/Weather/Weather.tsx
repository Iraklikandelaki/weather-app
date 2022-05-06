import styles from "./style/Weather.module.sass";
import WeatherCard from "./WeatherCard";

const Weather: React.FC = (props) => {
  const fetchWeatherConditionJSON = async <T,>(): Promise<T> => {
    const res = await fetch(
      "https://www.weatherapi.com/docs/weather_conditions.json"
    );
    const resJSON = await res.json();
    return resJSON;
  };
  
  fetchWeatherConditionJSON().then(data => console.log(data));

  const getLoc = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  };

  const showPosition = (position: GeolocationPosition) => {
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
    console.log(resJSON, "resjson");
    return resJSON;
  };

  getLoc();
  return (
    <div className={styles.weather}>
      <WeatherCard />
    </div>
  );
};

export default Weather;
