import styles from "./styles.module.scss";
import { AirCondition } from "./AirCondition";
import { Humidity } from "./Humidity";
import { Sun } from "./Sun";
import { Wind } from "./Wind";

export const Highlights = ({ data }) => {
  return (
    <div className={styles.highlights}>
      <Sun data={data} />
      <Humidity data={data} />
      <AirCondition data={data} />
      <Wind data={data} />
    </div>
  );
};
