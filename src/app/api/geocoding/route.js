const apiKey = process.env.OPENWEATHER_API_KEY || "";

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  const url = new URL("http://api.openweathermap.org/geo/1.0/direct");
  url.searchParams.append("q", query);
  url.searchParams.append("limit", 5);
  url.searchParams.append("appid", apiKey);

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return Response.json({ ...data });
  } catch (error) {
    return Response.json({});
  }
};
