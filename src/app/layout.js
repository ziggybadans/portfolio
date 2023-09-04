import "../styles/globals.css";
import { Outfit } from 'next/font/google'
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.scss"

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
      <section className={`absolute min-h-screen min-w-full ${styles.background}`}>
        <div className={`pt-[20px] pb-[100px] flex flex-col items-center`}>
          <Navbar />
        </div>
        {children}
      </section>
      </body>
    </html>
  )
}