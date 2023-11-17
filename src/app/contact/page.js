"use client"

import { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.scss"
import { motion } from "framer-motion";
import { IconContext } from "react-icons/lib";
import { LuX } from "react-icons/lu"

export default function Contact() {
    const [subject, setSubject] = useState("");
    const [otherSelected, setOtherSelected] = useState(false);

    useEffect(() => {
        if (subject === "other") {
            setOtherSelected(true);
        } else {
            setOtherSelected(false);
        }
    }, [subject]);

    const handleSubjectChange = (e) => {
        let selectElement = e.target;

        if (selectElement.value !== "") {
            selectElement.classList.replace("text-gray-400", "text-inherit")
        }
        setSubject(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            firstName: e.target.elements.name[0].value,
            lastName: e.target.elements.name[1].value,
            email: e.target.elements.email.value,
            region: e.target.elements.region.value,
            phone: e.target.elements.phone.value,
            subject: e.target.elements.subject.value,
            message: e.target.elements.message.value
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.ok) {
                alert('Form sent!');
            } else {
                throw new Error(response.statusText);
            }
        } catch (err) {
            alert('An error occurred. Please try again.');
            console.error(err);
        }
    };

    return (
        <main className={`flex flex-col items-center min-h-screen
        ${styles.main} dark:bg-[#050b0e] bg-[#fff8f3]`}>
            <div className={`pt-[20px] flex flex-col items-center`}>
                <Navbar/>
            </div>

            <div id="title" className="pb-8 mt-[110px]">
                <h1 className="text-6xl font-bold">Contact</h1>
                <span>Want to discuss potential work or something else? Send a message here!</span>
            </div>

            <form className="flex flex-col gap-2" onSubmit={handleSubmit} method="POST">
                <div className="flex flex-row gap-2 relative">
                    <input type="text" name="name" placeholder="First name (required)" required className="p-2 rounded-lg dark:bg-black" />
                    <input type="text" name="name" placeholder="Last name" className="p-2 rounded-lg dark:bg-black" />

                    <div className="text-red-300 absolute -left-5 top-[10px]">*</div>
                </div>

                <div className="flex flex-col relative">
                    <input type="email" name="email" placeholder="Email address" required className="p-2 rounded-lg dark:bg-black" />

                    <div className="text-red-300 absolute -left-5 top-[10px]">*</div>
                </div>

                <div className="flex flex-row gap-2">
                    <input type="text" name="region" placeholder="Region" className="p-2 rounded-lg dark:bg-black" />
                    <input type="tel" name="phone" placeholder="Phone number" className="p-2 rounded-lg dark:bg-black" />
                </div>

                <div className="flex flex-col relative">
                    <select name="subject" placeholder="Subject" onChange={handleSubjectChange} className="p-2 rounded-lg dark:bg-black text-gray-400">
                        <option value="" disabled selected>Select your option</option>
                        <option value="photography">Photography Commission</option>
                        <option value="cinematography">Cinematography Commission</option>
                        <option value="interest">Photography/Cinematography Interest</option>
                        <option value="other">Other</option>
                    </select>

                    <div className="text-red-300 absolute -left-5 top-[10px]">*</div>
                </div>
                {otherSelected ?
                    <div className="flex flex-col relative">
                        <input type="text" name="otherSubject" placeholder="Specific subject" required className="p-2 -mt-1 rounded-lg dark:bg-black"/>

                        <div className="text-red-300 absolute -left-5 top-[10px]">*</div>
                    </div> 
                : null}

                <div className="flex flex-col relative">
                    <textarea name="message" placeholder="Your message" required className="h-[150px] p-2 rounded-lg dark:bg-black"/>

                    <div className="text-red-300 absolute -left-5 top-[10px]">*</div>
                </div>

                <motion.button type="submit" className="p-2 dark:bg-teal-950 mt-2 dark:bg-opacity-10 bg-opacity-75 rounded-full dark:border-teal-950 border-orange-200 border-[3px]
                 bg-orange-100 dark:shadow-teal-950 shadow-orange-100 shadow-lg text-lg cursor-pointer"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    Send message
                </motion.button>
            </form>
        </main>
    )
}