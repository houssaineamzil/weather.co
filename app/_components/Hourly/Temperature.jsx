"use client"

import { Card } from "_components/ui/Card"
import { WeatherIcon } from "_components/ui/WeatherIcon"
import { toDateTime } from "_utils/dateUtils"
import { useRef, useState } from "react"
import styles from "./styles.module.scss"

export const Temperature = ({ data }) => {
	const sliderRef = useRef(null)
	const [isDown, setIsDown] = useState(false)
	const [startX, setStatX] = useState(0)
	const [scrollLeft, setScrollLeft] = useState(0)

	const onMouseDown = (event) => {
		const slider = sliderRef?.current
		setIsDown(true)
		slider.style.cursor = "grabbing "
		setStatX(event.pageX - slider.offsetLeft)
		setScrollLeft(slider.scrollLeft)
	}

	const onMouseLeave = (event) => {
		const slider = sliderRef?.current
		setIsDown(false)
		slider.style.cursor = "grab"
	}

	const onMouseUp = () => {
		const slider = sliderRef?.current
		setIsDown(false)
		slider.style.cursor = "grab"
	}

	const onMouseMove = (event) => {
		const slider = sliderRef?.current
		if (!isDown) return
		event.preventDefault()
		const x = event.pageX - slider.offsetLeft
		const walk = (x - startX) * 2 //scroll-fast
		slider.scrollLeft = scrollLeft - walk
	}

	return (
		<div
			ref={sliderRef}
			className={styles.hourly__Temperature}
			onMouseDown={onMouseDown}
			onMouseLeave={onMouseLeave}
			onMouseUp={onMouseUp}
			onMouseMove={onMouseMove}>
			{data.map((hour, index) => {
				return (
					<Card key={index} className={styles.day}>
						<div className={styles.title}>{toDateTime(hour.dt)}</div>
						<div className={styles.iconWrapper}>
							<WeatherIcon className={styles.icon} icon={hour.weather[0].icon} />
						</div>
						<div className={styles.value}>{`${parseInt(hour.temp)}°`}</div>
					</Card>
				)
			})}
		</div>
	)
}
