"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Darkbox from "../components/Darkbox"

function Tape() {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetch("/assets/videos.json")
            .then((response) => response.json())
            .then((data) => setVideos(data.data))
            .catch((error) => console.error(error));
    }, []);

    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleVideoClick = (video) => {
        if (window.innerWidth < 600) {
            window.open("https://www.youtube.com/watch?v=" + video.link, '_blank');
        } else {
            setSelectedVideo(video);
        }
    };

    return(
        <div className="grid grid-cols-2 gap-4 mt-10 transition-opacity">
            {videos.map((video, index) => (
                <div
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleVideoClick(video)}
                >
                    <Image
                        src={video.thumbnail}
                        alt={video.name}
                        width={video.width}
                        height={video.height}
                    />
                </div>
            ))}
            {selectedVideo && (
                <Darkbox
                    videos={videos}
                    selectedVideo={selectedVideo}
                    setSelectedVideo={setSelectedVideo}
                />
            )}
        </div>
    )

}

export default Tape;