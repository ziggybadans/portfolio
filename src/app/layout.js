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
      <link rel="preconnect" href="https://fonts.googleapis.com" suppressHydrationWarning/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin suppressHydrationWarning/>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600&display=swap" rel="stylesheet" suppressHydrationWarning/>
      <link rel="stylesheet" href="https://use.typekit.net/gug7lfb.css" suppressHydrationWarning/>
      <body className="p-0 m-0 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
