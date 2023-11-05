export const DEFAULT_LOCATION = {
	city: "Tinejdad",
	coord: {
		lat: "31.512245",
		lon: "-5.0285626",
	},
}

export const useWeatherStore = create()((set) => ({
	lat: DEFAULT_LOCATION.coord.lat,
	lon: DEFAULT_LOCATION.coord.lon,
	city: DEFAULT_LOCATION.city,

	setLatAndLng: (lat, lon) =>
		set((state) => ({
			...state,
			lat,
			lon,
		})),
	setCity: (city) =>
		set((state) => ({
			...state,
			city,
		})),
}))
