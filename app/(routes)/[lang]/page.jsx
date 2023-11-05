// imports
import { getDictionary } from "_i18n/getDictionary";
import { Highlights } from "_components/Highlights";
import { Hourly } from "_components/Hourly";
import { Weather } from "_components/Weather";
import { Weekly } from "_components/Weekly";

const Page = async ({ params: { lang }, searchParams }) => {
  const dictionary = await getDictionary(lang);
  const { lat, lon } = searchParams;
  const data = await getData(lat, lon);
  const city = await getCity(lat, lon);

  return (
    <>
      <div className="container">
        <Weather city={city} data={data.current} />
        <Highlights data={data.current} />
        <Weekly data={data.daily} />
        <Hourly data={data.hourly} />
      </div>
    </>
  );
};

export const getData = async (lat, lon, units = "metric", lang = "en") => {
  const response = await fetch(
    `http://127.0.0.1:8000/api?lat=${lat}&lon=${lon}&units=${units}&lang=${lang}`,
    { next: { revalidate: 300 } },
  );
  return response.json();
};

export const getCity = async (lat, lon, limit = 10) => {
  const url = new URL("https://api.geoapify.com/v1/geocode/reverse");
  url.searchParams.append("lat", lat);
  url.searchParams.append("lon", lon);
  url.searchParams.append("format", "json");
  url.searchParams.append("apiKey", process.env.REVERSE_GEOCODING);

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return data.results[0].city;
  } catch (error) {
    return "";
  }
};

export default Page;
