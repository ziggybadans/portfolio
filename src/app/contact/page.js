import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.scss"

export default function Contact() {
    return (
        <main className={`flex flex-col items-center min-h-screen
        ${styles.main} dark:bg-[#050b0e] bg-[#fff8f3]`}>
            <div className={`pt-[20px] flex flex-col items-center`}>
                <Navbar/>
            </div>
        </main>
    )
}