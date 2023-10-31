import Navbar from "../../../components/Navbar";
import styles from "../../../styles/Home.module.scss"
import BandGallery from "../../../components/BandGallery"

export default function Band() {
    return (
        <main className={`flex flex-col items-center min-h-screen
        ${styles.main} dark:bg-[#050b0e] bg-[#fff8f3]`}>
            <div className={`pt-[20px] flex flex-col items-center`}>
                <Navbar/>
            </div>
            <div id="title" className="pb-8 mt-[50px]">
                <h1 className="text-6xl font-bold">Band Photography</h1>
            </div>
            <BandGallery/>
        </main>
    )
}