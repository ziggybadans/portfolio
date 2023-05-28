import { useState, useRef, useEffect } from 'react';

const AudioPlayer = ({ src }) => {
    const audioRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        const audioElement = audioRef.current;

        const setAudioData = () => {
            setDuration(Math.floor(audioElement.duration));
            setCurrentTime(Math.floor(audioElement.currentTime));
        };

        const setAudioTime = () => setCurrentTime(Math.floor(audioElement.currentTime));

        audioElement.addEventListener("loadeddata", setAudioData);
        audioElement.addEventListener("timeupdate", setAudioTime);

        return () => {
            audioElement.removeEventListener("loadeddata", setAudioData);
            audioElement.removeEventListener("timeupdate", setAudioTime);
        };
    }, []);

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    };

    const changeRange = (e) => {
        audioRef.current.currentTime = e.target.value;
        setCurrentTime(e.target.value);
    };

    return (
        <div>
            <button onClick={togglePlayPause}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <div>
                <input
                    type="range"
                    value={currentTime}
                    step="1"
                    min="0"
                    max={duration}
                    onChange={changeRange}
                />
                <div>Duration: {duration}</div>
                <div>Current time: {currentTime}</div>
            </div>
            <audio ref={audioRef} src={src} controls={false} />
        </div>
    );
};

export default AudioPlayer;
