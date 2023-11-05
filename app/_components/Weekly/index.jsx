import styles from "./styles.module.scss";
import { Card } from "_components/ui/Card";
import { WeatherIcon } from "_components/ui/WeatherIcon";

const weekDayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const Weekly = ({ data }) => {
  return (
    <Card className={styles.weekly}>
      {data.map((day, index) => {
        const date = new Date(day.dt * 1000);
        return (
          <div key={index} className={styles.line}>
            <div className={styles.day}>{weekDayNames[date.getUTCDay()]}</div>
            <div className={styles.iconWrapper}>
              <WeatherIcon className={styles.icon} />
            </div>
            <div className={styles.temperature}>
              <div className={styles.max}>{`${parseInt(day.temp.max)}°`}</div>
              <div className={styles.min}>{`${parseInt(day.temp.min)}°`}</div>
            </div>
          </div>
        );
      })}
    </Card>
  );
};
