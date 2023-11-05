// imports
import "_styles/globals.scss";
import { i18n } from "_i18n/i18n-config";
import { Header } from "_components/Header";

// metadata
export const metadata = {
  title: "weather.co",
  description: "Weather forecast with current conditions, wind and air quality.",
};

export const generateStaticParams = async () => {
  return i18n.locales.map((locale) => ({ lang: locale }));
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
