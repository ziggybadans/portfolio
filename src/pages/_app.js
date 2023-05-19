import '@/styles/globals.scss'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { auth } from '../../firebaseClient.js'
import { UserContext } from '../../hooks/UserContext.Provider.jsx'

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Dark Mode
  const [ darkMode, setDarkMode ] = useState(false);

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

  // Authentication
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    return auth.onAuthStateChanged(currentUser => {
      setUser(currentUser);
    });
  }, []);

  return (
    <div className="background">
      <UserContext.Provider value={user}>
        <Component {...pageProps} darkMode={darkMode} setDarkMode={setDarkMode} onDarkModeReady={onDarkModeReady}/>
      </UserContext.Provider>
    </div>
  )
}
