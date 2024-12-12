import styles from "./Time.module.css";
const Time = () => {
  const currentDate = new Date();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsOfYear = [
    "January,",
    "February,",
    "March,",
    "April,",
    "May,",
    "June,",
    "July,",
    "August,",
    "September,",
    "October,",
    "November,",
    "December,",
  ];
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const month = monthsOfYear[currentDate.getMonth()];

  return (
    <div className={styles.conteiner}>
      <div className={styles.dataDay}>
        <p className={styles.data}>{dayOfMonth}</p>
        <p className={styles.data}> {month}</p>
        <p className={styles.data}>{dayOfWeek}</p>
      </div>
    </div>
  );
};

export default Time;
