import { Card } from "_components/ui/Card";
import { WeatherIcon } from "_components/ui/WeatherIcon";
import styles from "./styles.module.scss";

export const Wind = ({
  data: { wind_speed = 0, wind_deg = 0, wind_gust = 0 } = {},
}) => {
  return (
    <Card className={styles.highlights__Wind}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Wind Speed</div>
        <div className={styles.iconWrapper}>
          <WeatherIcon className={styles.icon} />
        </div>
        <div className={styles.value}>{`${wind_speed.toFixed(1)}m/s`}</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.title}>Wind Gust</div>
        <div className={styles.iconWrapper}>
          <WeatherIcon
            className={styles.icon}
            style={{ transform: `rotateZ(${wind_deg}deg)` }}
          />
        </div>
        <div className={styles.value}>{`${wind_gust.toFixed(1)}m/s`}</div>
      </div>
    </Card>
  );
};
