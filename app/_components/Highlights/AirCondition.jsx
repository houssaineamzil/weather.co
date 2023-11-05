import { Card } from "_components/ui/Card";
import { WeatherIcon } from "_components/ui/WeatherIcon";
import styles from "./styles.module.scss";

export const AirCondition = ({ data: { clouds = 0, uvi = 0 } = {} }) => {
  return (
    <Card className={styles.highlights__AirCondition}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Cloudiness</div>
        <div className={styles.iconWrapper}>
          <WeatherIcon className={styles.icon} />
        </div>
        <div className={styles.value}>{`${clouds}%`}</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.title}>UVI</div>
        <div className={styles.iconWrapper}>
          <WeatherIcon className={styles.icon} />
        </div>
        <div className={styles.value}>{uvi}</div>
      </div>
    </Card>
  );
};
