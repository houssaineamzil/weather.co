// imports
import "_styles/globals.scss";
import { Header } from "_components/Header";

// metadata
export const metadata = {
  title: "weather.co",
  description:
    "Weather forecast with current conditions, wind and air quality.",
};

const RootLayout = ({ children, params }) => {
  return (
    <html lang={params.lang}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
