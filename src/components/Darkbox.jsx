import { motion } from "framer-motion";
import YouTube from "react-youtube"

export default function Darkbox({ videos, selectedVideo, setSelectedVideo }) {
    if (!selectedVideo) return null;

    const currentVideoIndex = videos.findIndex(video => video.link === selectedVideo.link);

    function closeLightbox() {
        setSelectedVideo(null);
    }

    function showPreviousVideo() {
        if (currentVideoIndex > 0) {
            setSelectedVideo(videos[currentVideoIndex - 1]);
        }
    }

    function showNextVideo() {
        if (currentVideoIndex < videos.length - 1) {
            setSelectedVideo(videos[currentVideoIndex + 1]);
        }
    }

    const opts = {
        height: selectedVideo.height*1.75,
        width: selectedVideo.width*1.75,
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <motion.div className={`fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-[60] bg-black bg-opacity-50 text-white`}>
            <button className="absolute top-0 right-0 m-2" onClick={closeLightbox}>
                Close
            </button>
            <motion.div className="relative m-4 overflow-auto">
                <div className="relative drop-shadow-xl">
                    <YouTube videoId={selectedVideo.link} opts={opts} />
                </div>
            </motion.div>
            <button className="absolute top-1/2 left-0 m-2" onClick={showPreviousVideo}>
                Back
            </button>
            <button className="absolute top-1/2 right-0 m-2" onClick={showNextVideo}>
                Forward
            </button>
        </motion.div>
    )
}