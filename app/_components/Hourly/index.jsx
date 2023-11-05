import styles from "./styles.module.scss";
import { Temperature } from "./Temperature";
import { Wind } from "./Wind";

export const Hourly = ({ data }) => {
  return (
    <div className={styles.hourly}>
      <Temperature data={data} />
      <Wind data={data} />
    </div>
  );
};
