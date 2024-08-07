const apiKey = process.env.OPENWEATHER_API_KEY || "";

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const latitude = searchParams.get("lat");
  const longitude = searchParams.get("lon");
  const units = searchParams.get("units") ?? "metric";
  const lang = searchParams.get("lang") ?? "en";

  const url = new URL(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${units}&lang=${lang}&appid=${apiKey}`,
  );

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return Response.json({ ...data });
  } catch (error) {
    return Response.json({});
  }
};
