"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Darkbox from "../components/Darkbox"
import { motion } from "framer-motion";
import styles from "../styles/modules/Gallery.module.scss";

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
                    <motion.div
                        key={index}
                        id={styles[video.size]}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
                        }}
                        whileTap={{ scale: 1.05 }}
                        style={{ cursor: "pointer" }}
                    >
                        <Image
                            src={video.thumbnail}
                            alt={video.name}
                            width={video.width}
                            height={video.height}
                        />
                    </motion.div>
                    <div className="text-xl font-semibold mt-3 mb-3 ml-1">
                        {video.name}
                    </div>
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