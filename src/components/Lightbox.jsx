import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IconContext } from "react-icons/lib";
import { LuX, LuArrowLeft, LuArrowRight } from "react-icons/lu"

export default function Lightbox({ images, selectedImage, setSelectedImage }) {
    const [infoPanelOpen, setInfoPanelOpen] = useState(false);

    if (!selectedImage) return null;

    const currentImageIndex = images.findIndex(image => image.link === selectedImage.link);

    function closeLightbox() {
        setSelectedImage(null);
    }

    function showPreviousImage() {
        if (currentImageIndex > 0) {
            setSelectedImage(images[currentImageIndex - 1]);
        }
    }

    function showNextImage() {
        if (currentImageIndex < images.length - 1) {
            setSelectedImage(images[currentImageIndex + 1]);
        }
    }

    return (
        <motion.div className={`fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center 
        z-[60] bg-black bg-opacity-50 text-white`}>
            <button className="absolute top-5 right-5 m-2" onClick={closeLightbox}>
                <IconContext.Provider value={{ className: "shared-class", size: 60 }}>
                    <LuX/>
                </IconContext.Provider>
            </button>
            <motion.div className="relative flex-grow max-w-4xl max-h-full m-4">
                <div className="h-screen drop-shadow-xl">
                    <Image
                        src={selectedImage.link}
                        alt={selectedImage.text}
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </motion.div>
            <button className="absolute max-lg:top-[87%] left-3 max-lg:left-[25%] m-2" onClick={showPreviousImage}>
                <IconContext.Provider value={{ className: "shared-class", size: 60 }}>
                    <LuArrowLeft/>
                </IconContext.Provider>
            </button>
            <button className="absolute max-lg:top-[87%] right-3 max-lg:right-[25%] m-2" onClick={showNextImage}>
                <IconContext.Provider value={{ className: "shared-class", size: 60 }}>
                    <LuArrowRight/>
                </IconContext.Provider>
            </button>
        </motion.div>
    );
}