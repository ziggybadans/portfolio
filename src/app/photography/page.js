import styles from "../../styles/Home.module.scss"
import Gallery from "../../components/Gallery"

export default function Photos() {
    return (
        <main className={`flex flex-col items-center relative ${styles.main}`}>
            <div id="title" className="pb-8">
                <span className="text-6xl font-bold">Photography</span>
            </div>
            <Gallery/>
        </main>
    )
}