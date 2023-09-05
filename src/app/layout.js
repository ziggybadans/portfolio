import "../styles/globals.css";
import Providers from "./providers";
import { Outfit } from 'next/font/google'

export const metadata = {
  title: "Ziggy Badans",
  description: "Film and photography portfolio.",
};

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/gug7lfb.css" suppressHydrationWarning/>
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}