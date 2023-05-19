import PropTypes from 'prop-types';

export default function DarkModeButton({ darkMode, setDarkMode }) {
    const handleClick = () => {
        const newDarkMode = !darkMode
        setDarkMode(newDarkMode)

        // Update localStorage based on newDarkMode state
        localStorage.setItem('dark', JSON.stringify(newDarkMode))

        // Add "dark" class to main element when dark mode is enabled
           if (newDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        // Change icon image based on dark mode state
        const icon = document.querySelector('.darkmode-icon')
        if (newDarkMode) {
            icon.setAttribute('src', '/light-mode.png')
            icon.setAttribute('alt', 'Enable Light Mode')
        } else {
            icon.setAttribute('src', '/dark-mode.png')
            icon.setAttribute('alt', 'Enable Dark Mode')
        }
    }

    const iconSrc = darkMode ? '/dark-mode.png' : '/light-mode.png'
    const iconAlt = darkMode ? 'Enable Light Mode' : 'Enable Dark Mode'

    return (
        <button onClick={handleClick} className="fixed bottom-0 right-0 m-4">
            <img src={iconSrc} alt={iconAlt} className="darkmode-icon w-12 h-12"/>
        </button>
    )
}

DarkModeButton.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired,
    onDarkModeReady: PropTypes.func
};