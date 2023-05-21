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
    }

    const colour = darkMode ? "white" : "black"
    const iconAlt = darkMode ? 'Enable Light Mode' : 'Enable Dark Mode'

    return (
        <button onClick={handleClick} className="fixed bottom-0 left-0 m-8">
            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 842.5 842.5" width="75" height="75">
                <g id="Layer_1-2" data-name="Layer 1">
                    <g>
                    <path fill={colour} d="m93.16,422.93c.98-83.5,28.77-156.68,84.38-219.24,26.49-29.8,57.7-53.39,92.76-72.15,10.15-5.43,20.14-7.78,29.78.3,10.33,8.66,13.13,20.17,9.26,32.69-7.03,22.79-12.85,45.76-15.66,69.51-6.93,58.66,1.24,115.15,24.78,169.2,30.48,69.96,79.81,122.99,146.96,159.04,40.75,21.88,84.39,34.37,130.74,37.28,14.77.93,29.4,1.3,44.2.17,18.26-1.39,32.85,11,33.31,26.57.19,6.47-2.19,11.68-6.39,16.33-36.37,40.36-79.77,70.37-130.78,89.32-42.93,15.95-87.32,23.01-132.9,20.07-78.36-5.05-146.99-33.72-204.86-87.31-50.93-47.17-83.67-104.72-98.4-172.49-4.95-22.77-7.63-45.84-7.19-69.29Z"/>
                    <path fill={colour} d="m616.12,377.58c-.38,8.31-3.82,14.79-11.6,18.31-12.7,5.74-25.39,11.54-38.29,16.78-8.43,3.42-13.89,8.99-17.32,17.38-5.48,13.4-11.64,26.53-17.41,39.81-3.5,8.04-9.45,12.61-18.24,13.03-9.02.44-15.09-4.52-19.02-11.95-7.54-14.26-14.73-28.7-21.87-43.16-3.16-6.39-7.57-11.07-14.21-14.04-11.97-5.35-23.75-11.16-35.59-16.79-8.27-3.93-13.83-9.92-13.68-19.59.14-9.29,5.6-15.05,13.57-18.84,11.85-5.64,23.62-11.44,35.59-16.8,6.62-2.96,11.1-7.58,14.25-14,6.74-13.74,13.78-27.34,20.59-41.05,4.18-8.41,10.03-14.49,20.13-14.2,10.37.29,16.13,6.59,19.89,15.68,5.33,12.88,11.2,25.53,16.55,38.4,3.13,7.52,8.2,12.58,15.73,15.73,13.11,5.48,26.08,11.31,39.05,17.1,7.79,3.48,11.4,9.82,11.89,18.19Z"/>
                    </g>
                </g>
            </svg>
        </button>
    )
}

DarkModeButton.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired,
    onDarkModeReady: PropTypes.func
};