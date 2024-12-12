import { useState, useEffect, useContext } from "react";
import { InputContext } from "./Input";
import styles from "./Today.module.css";

const FourDays = () => {
  const { text } = useContext(InputContext);
  const [forecast, setForecast] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function getWeather() {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${text}&units=metric&lang=ru&appid=8533705731c45bf2a2a9fafcedd58c02`
        );
        const json = await res.json();

        const dailyForecast = json.list
          .filter((reading) => reading.dt_txt.includes("12:00:00"))
          .slice(0, 7);

        setForecast(dailyForecast);
        setIsLoaded(true);
      } catch (error) {
        console.error("Ошибка получения данных:", error);
      }
    }

    getWeather();
  }, [text]);
  console.log(text);

  return (
    <div className={styles.conteiner}>
      {isLoaded ? (
        <div>
          <h3>{text}</h3>
          {forecast.map((day, index) => (
            <div key={index} className={styles.box}>
              <p className={styles.p}>
                Дата: {new Date(day.dt_txt).toLocaleDateString()}
              </p>
              <p className={styles.p}>
                Температура: {Math.floor(day.main.temp)}°C
              </p>
              <p className={styles.p}>
                Погодные условия: {day.weather[0].description}
              </p>
              <p className={styles.p}>Влажность: {day.main.humidity}%</p>
              <p className={styles.p}>Скорость ветра: {day.wind.speed} м/с</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Загрузка прогноза...</p>
      )}
    </div>
  );
};

export default FourDays;
