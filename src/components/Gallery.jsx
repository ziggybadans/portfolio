"use client";

import styles from "../styles/modules/Gallery.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Lightbox from "./Lightbox"

export default function Gallery() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("/assets/images.json")
      .then((response) => response.json())
      .then((data) => setImages(data.data))
      .catch((error) => console.error(error));
  }, []);

  const [typeFilter, setTypeFilter] = useState('all');
  const typeFilters = [ "all", "nature", "wildlife", "architecture", "sky", "portrait", "landscape", "abstract", "cars" ]
  const [mediumFilter, setMediumFilter] = useState('all');
  const mediumFilters = [ "all", "digital", "film" ]

  let filteredImages = images;
  if (typeFilter !== 'all') {
    filteredImages = filteredImages.filter(image => image.tags.includes(typeFilter) && !image.tags.includes("bands"));
  } else {
    filteredImages = filteredImages.filter(image => !image.tags.includes("bands"));
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
        <div className="flex flex-row gap-[115px] ml-2 mb-2 text-gray-300 text-sm font-semibold">
          <div>Type</div>
          <div>Medium</div>
        </div>
        <div className="flex flex-row justify-center gap-3 mb-10">
          <div className="relative inline-flex">
            <select
              className="bg-stone-50 dark:bg-black border appearance-none rounded-full p-2 pl-3 pr-10"
              value={typeFilter}
              onChange={e => setTypeFilter(e.target.value)}
            >
              {typeFilters.map((filter) => (
                <option key={filter} value={filter}>
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-6 w-6 transform rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7.05 11.293l3.591-3.909a.697.697 0 0 1 1.041 0l3.909 3.909a.802.802 0 0 1 0 1.114.776.776 0 0 1-1.114 0l-3.272-3.576-3.27 3.576a.776.776 0 0 1-1.114 0 .802.802 0 0 1 0-1.114z" />
              </svg>
            </div>
          </div>
          <div className="relative inline-flex">
            <select
              className="bg-stone-50 dark:bg-black border appearance-none w-[140px] rounded-full p-2 pl-3 pr-10"
              value={mediumFilter}
              onChange={e => setMediumFilter(e.target.value)}
            >
              {mediumFilters.map((filter) => (
                <option key={filter} value={filter}>
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-6 w-6 transform rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7.05 11.293l3.591-3.909a.697.697 0 0 1 1.041 0l3.909 3.909a.802.802 0 0 1 0 1.114.776.776 0 0 1-1.114 0l-3.272-3.576-3.27 3.576a.776.776 0 0 1-1.114 0 .802.802 0 0 1 0-1.114z" />
              </svg>
            </div>
          </div>
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