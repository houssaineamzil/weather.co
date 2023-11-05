const searchParams = useSearchParams();
const [currentWeather, setCurrentWeather] = useState(null);
const [currentDateTime, setCurrentDateTime] = useState("");

useEffect(() => {
  const fetchWeather = async () => {
    const latitude = searchParams.get("lat") ?? 31.512245; // Tinejdad Bro 😎
    const longitude = searchParams.get("lon") ?? -5.0285626; // Tinejdad Bro 😎

    const response = await fetch(
      `/api/weather?lat=${latitude}&lon=${longitude}`,
    );
    const weatherData = await response.json();

    setCurrentWeather(weatherData);
  };

  fetchWeather();

  return () => {
    fetchWeather();
  };
}, [searchParams]);

useEffect(() => {
  const getCurrentDateTime = () => {
    const now = new Date(currentWeather?.dt ?? 0 * 1000);
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(now.getDate()).padStart(2, "0");
    setCurrentDateTime(`${hours}:${minutes}${month}/${day}`);
  };

  getCurrentDateTime();

  return () => {
    getCurrentDateTime();
  };
}, [currentWeather]);
