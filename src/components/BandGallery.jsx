"use client";

import styles from "../styles/modules/Gallery.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Lightbox from "./Lightbox"

export default function BandGallery() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("/assets/images.json")
      .then((response) => response.json())
      .then((data) => setImages(data.data))
      .catch((error) => console.error(error));
  }, []);

  const [typeFilter, setTypeFilter] = useState('bands');
  const typeFilters = [ "all", "nature", "wildlife", "architecture", "sky", "portrait", "landscape", "bands", "abstract", "cars" ]
  const [mediumFilter, setMediumFilter] = useState('all');
  const mediumFilters = [ "all", "digital", "film" ]

  let filteredImages = images;
  if (typeFilter !== 'all') {
    filteredImages = filteredImages.filter(image => image.tags.includes(typeFilter));
  }
  if (mediumFilter !== 'all') {
    filteredImages = filteredImages.filter(image => {
      if (mediumFilter === 'digital') {
        return !image.tags.includes('film');
      } else if (mediumFilter === 'film') {
        return image.tags.includes('film');
      } else {
        return true;
      }
    });
  }

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center gap-3 mb-10">
        </div>

        <div className="w-full border-b border-black dark:border-gray-600"></div>
      </div>


      <div className={`mt-10 ${styles.gallerycontainer}`}>
        <div className={styles.gallery}>
          {filteredImages.map((item, index) => (
            <motion.div
              key={index}
              id={styles[item.size]}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 1.05 }}
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedImage(item)}
            >
              <Image
                className={styles.griditem}
                id={styles[item.size]}
                src={item.link}
                alt={item.text}
                width={item.width}
                height={item.height}
              />
            </motion.div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <Lightbox
          images={filteredImages}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
}