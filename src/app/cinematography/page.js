import styles from "../../styles/Home.module.scss"
import Tape from "../../components/Tape"
import Navbar from "../../components/Navbar"

export default function Films() {
    return (
        <section>
            <main className={`flex flex-col items-center relative ${styles.main}`}>
                <div className={`pt-[20px] pb-[100px] flex flex-col items-center`}>
                    <Navbar/>
                </div>
                <div id="title" className="pb-8">
                    <span className="text-6xl font-bold">Cinematography</span>
                </div>
                <Tape/>
            </main>
        </section>

    )
}