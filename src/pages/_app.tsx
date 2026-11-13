import { type AppType } from "next/dist/shared/lib/utils";
import { JetBrains_Mono } from "next/font/google";

import "~/styles/globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
  display: "swap",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={`${jetbrainsMono.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
