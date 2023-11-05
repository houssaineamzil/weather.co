import { Card } from "_components/ui/Card"
import { WeatherIcon } from "_components/ui/WeatherIcon"
import { toTime } from "_utils/dateUtils"
import styles from "./styles.module.scss"

export const Sun = ({ data: { sunrise = 0, sunset = 0 } = {} }) => {
	return (
		<Card className={styles.highlights__Sun}>
			<div className={styles.wrapper}>
				<div className={styles.title}>Sunrise</div>
				<div className={styles.iconWrapper}>
					<WeatherIcon className={styles.icon} />
				</div>
				<div className={styles.value}>{toTime(sunrise)}</div>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.title}>Sunset</div>
				<div className={styles.iconWrapper}>
					<WeatherIcon className={styles.icon} />
				</div>
				<div className={styles.value}>{toTime(sunset)}</div>
			</div>
		</Card>
	)
}
