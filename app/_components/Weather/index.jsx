"use client"

import { Card } from "_components/ui/Card"
import { WeatherIcon } from "_components/ui/WeatherIcon"
import { toDateTime } from "_utils/dateUtils"
import styles from "./styles.module.scss"
import { useParams } from "next/navigation"

export const Weather = ({
	city: { name, local_names, lat, lon, country },
	data: {
		dt = 0,
		temp = 0,
		weather: [{ description = "Clear", icon = "04n" }] = [{}],
	} = {},
}) => {
	const params = useParams()
	return (
		<Card className={styles.weather}>
			<div className={styles.weatherdetails}>
				<div className={styles.city}>{local_names[params.lang]}, {country}</div>
				<div className={styles.datetime}>{toDateTime(dt)}</div>
				<div className={styles.temperature}>{`${parseInt(temp)}°`}</div>
			</div>
			<div className={styles.weatherIcon}>
				<WeatherIcon className={styles.icon} icon={icon} />
				<div className={styles.description}>{description}</div>
			</div>
		</Card>
	)
}
