"use client";

import { DEFAULT_LOCATION } from "_utils/store";
import { useLayoutEffect, useState } from "react";

export const useGeolocation = () => {
  const [location, setLocation] = useState({
    latitude: DEFAULT_LOCATION.coord.lat,
    longitude: DEFAULT_LOCATION.coord.lon,
  });

  useLayoutEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      });
    }
  }, []);

  return location;
};
