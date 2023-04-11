import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  const [ darkMode, setDarkMode ] = useState(false)

  useEffect(() => {
    initialiseDarkMode();
  }, [])

  function initialiseDarkMode() {
    const storedDarkMode = localStorage.getItem('dark')
    let isDark;

    // If storedDarkMode is not null, use its value, otherwise use the system's theme
    if (storedDarkMode !== null) {
      isDark = JSON.parse(storedDarkMode)
    } else {
      // Set theme based on user's system theme
      isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    // Add "dark" class to main element when dark mode is enabled
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    setDarkMode(isDark)
  }

  function onDarkModeReady() {
    initialiseDarkMode();
  }

  return (
    <>
      <Component {...pageProps} darkMode={darkMode} setDarkMode={setDarkMode} onDarkModeReady={onDarkModeReady}/>
    </>
  )
}
