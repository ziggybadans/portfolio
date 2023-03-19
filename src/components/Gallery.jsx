import styles from "../components/Gallery.module.scss";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from "react";
import Lightbox from "../components/Lightbox.jsx"

function reveal() {
    var reveals = document.querySelectorAll(".griditem")

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

function Gallery() {
    return (
            <div className={styles.gallery}>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image1.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image2.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image3.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image4.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image5.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image6.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image7.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image8.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image9.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image10.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image11.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image12.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image13.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image14.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image15.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image16.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image17.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image18.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image19.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image20.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image21.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image22.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image23.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image24.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image25.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image26.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image27.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image28.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image29.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image30.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image31.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image32.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image33.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image34.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image35.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image36.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image37.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image38.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image39.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image40.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image41.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image42.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image43.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image44.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image45.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image46.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image47.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image48.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image49.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image50.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image51.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image52.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image53.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image54.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image55.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image56.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image57.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image58.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image59.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image60.jpg" alt="" /></motion.div>
                <motion.div className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}><img className={styles.griditem} src="/images/image61.jpg" alt="" /></motion.div>
            </div>
    )
}

export default Gallery;