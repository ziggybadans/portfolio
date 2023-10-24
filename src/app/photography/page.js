import styles from "../../styles/Home.module.scss"
import Gallery from "../../components/Gallery"
import Navbar from "../../components/Navbar"

export default function Photos() {
    return (
        <main className={`flex flex-col items-center relative ${styles.main} dark:bg-[#050b0e] bg-[#fff8f3] transition-colors`}>
            <div className={`pt-[20px] pb-[100px] flex flex-col items-center`}>
                <Navbar/>
            </div>
            <div id="title" className="pb-8">
                <h1 className="text-6xl font-bold">Photography</h1>
            </div>
            <Gallery/>
        </main>
    )
}