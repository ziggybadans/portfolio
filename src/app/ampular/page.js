"use client"
import { Navbar } from "./navbar"
import styles from "../../styles/ampular.module.scss"
import testimg from "../../../public/testimg.png"
import Image from "next/image"
import background from "../../../public/background.png"

export default function Ampular() {
    return (
        <section className={`absolute min-h-screen min-w-full`}>
            <Navbar/>
            <div>
                <main className={`flex flex-col items-center min-h-screen mt-48`}>
                    <div className="top-48 z-10">
                        <span className={`text-7xl ${styles.title_8D}`}>AMPULAR</span>
                        <span className={`text-5xl ${styles.title_8D_2}`}> 8D</span>
                    </div>
                    <span className={`text-3xl top-[17.45rem] mt-3 z-10 ${styles.subtitle_8D}`}>Endless tone. Uniquely yours.</span>
                    <div className="absolute mt-10">
                        <Image src={testimg} width={700} alt="The Ampular 8D"/>
                    </div>
                    <div className="mt-[30rem] flex flex-row relative right-36">
                        <Image src={testimg} width={700} alt="The Ampular 8D"/>
                        <div className="flex flex-col">
                            <span className={`text-5xl mt-36 ${styles.title_8D}`}>FEATURES</span>
                            <ul className={`text-2xl mt-5 ${styles.body_8D}`}>
                                <li className="text-3xl">• 8 modular bays for slot-in effects</li>
                                <li className="ml-5">• 2 ultra bays for gain stage modification</li>
                                <li className="ml-5">• Dual channel functionality (w/ footswitch)</li>
                                <li className="text-3xl">• Removable speaker</li>
                                <li className="text-3xl">• Magnetic corner connectors for stacks</li>
                                <li>• Programmable LED grill lights</li>
                                <li>• Bluetooth control</li>
                            </ul>
                            <div className="flex flex-row">
                                <div className="flex flex-col">
                                    <span className={`text-xl mt-5 ${styles.title_8D}`}>SHELL FOR</span>
                                    <span className={`text-3xl ${styles.title_8D}`}>$499</span>
                                </div>
                                <div className="flex flex-col ml-20">
                                    <span className={`text-2xl mt-5 ${styles.title_8D}`}>PREBUILT</span>
                                    <div className="flex flex-row">
                                        <span className={`text-4xl ${styles.title_8D}`}>$1099</span>
                                        <div className="absolute ml-32 w-36 text-xs flex flex-col">
                                            <span className={`ml-2 mt-3 ${styles.title_8D}`}>w/ Celestion</span>
                                            <span className={`ml-2 ${styles.title_8D}`}>speaker + Reverb</span>
                                            <span className={`ml-2 ${styles.title_8D}`}>& Plexi gain stage</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div className="fixed min-w-full bottom-[-50px] z-50 h-32 bg-gray-950 blur-2xl"/>
            <section className={`absolute min-h-full min-w-full top-0 left-0 -z-10 ${styles.background}`}/>
        </section>
    )
}