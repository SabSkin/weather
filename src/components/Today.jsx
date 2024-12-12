import { useState, useEffect, useContext } from "react";
import { InputContext } from "./Input";
import styles from "./Today.module.css";

const Today = () => {
  const { text } = useContext(InputContext);
  const [value, setValue] = useState([]);
  const [item, setItem] = useState(false);

  useEffect(() => {
    async function getWeather() {
      try {
        const res =
          await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&lang=ru&appid=8533705731c45bf2a2a9fafcedd58c02    
         `);
        const json = await res.json();
        if (json.main && json.main.temp) {
          json.main.temp = Math.floor(json.main.temp);
        }
        setValue(json);
        setItem(true);
      } catch (error) {}
    }
    getWeather();
  }, [text]);

  return (
    <div className={styles.conteiner}>
      {item ? (
        <div className={styles.conteiner}>
          <div className={styles.box}>
            <h3 className={styles.h1}>{value.name}</h3>
            <p className={styles.p}>Температура: {value.main?.temp}°C</p>
            <p className={styles.p}>
              Погодные условия: {value.weather?.[0]?.description}
            </p>
            <p className={styles.p}>Влажность: {value.main?.humidity}%</p>
            <p className={styles.p}>Скорость ветра: {value.wind?.speed} м/с</p>
          </div>
        </div>
      ) : (
        <p>Загрузка погоды...</p>
      )}
    </div>
  );
};

export default Today;
