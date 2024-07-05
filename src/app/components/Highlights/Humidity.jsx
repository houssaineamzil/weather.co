import { Card } from "_components/ui/Card";
import { WeatherIcon } from "_components/ui/WeatherIcon";
import styles from "./styles.module.scss";

export const Humidity = ({ data: { humidity = 0, dew_point = 0 } = {} }) => {
  return (
    <Card className={styles.highlights__Humidity}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Humidity</div>
        <div className={styles.iconWrapper}>
          <WeatherIcon className={styles.icon} />
        </div>
        <div className={styles.value}>{`${humidity}%`}</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.title}>Dow Point</div>
        <div className={styles.iconWrapper}>
          <WeatherIcon className={styles.icon} />
        </div>
        <div className={styles.value}>{`${parseInt(dew_point)}°`}</div>
      </div>
    </Card>
  );
};
