"use client";

import { useEffect } from "react";
import { useGeolocation } from "_hooks/useGeolocation";
import { useRouter, useSearchParams } from "next/navigation";

export const Header = () => {
  const location = useGeolocation();
  const searchParams = useSearchParams();
  const router = useRouter();
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  useEffect(() => {
    if (!lat || !lon) {
      const { latitude, longitude } = location;
      router.push(`?lat=${latitude}&lon=${longitude}`);
    }
  }, [location, searchParams]);

  return;
};
