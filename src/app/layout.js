import { ThemeProvider } from "../interfaces/theme-context";
import Providers from "../interfaces/providers";
import "../styles/globals.css";

export const metadata = {
  title: "Ziggy Badans",
  description: "Film and photography portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600&display=swap" rel="stylesheet"/>
      <link rel="stylesheet" href="https://use.typekit.net/gug7lfb.css"/>
      <body className="p-0 m-0 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
