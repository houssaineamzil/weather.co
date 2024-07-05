import { proxy } from "valtio";

export const DEFAULT_LOCATION = {
  city: "Tinejdad",
  coord: {
    lat: "31.512245",
    lon: "-5.0285626",
  },
};

export const useWeatherStore = proxy({
  lat: DEFAULT_LOCATION.coord.lat,
  lon: DEFAULT_LOCATION.coord.lon,
  city: DEFAULT_LOCATION.city,
});
