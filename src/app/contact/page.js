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

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    const [overallProgress, setOverallProgress] = useState(0);
    const [fileProgress, setFileProgress] = useState({});
    const fileProgressRef = useRef({});

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

    const handleFileUpload = (event) => {
        let newFiles = Array.from(event.target.files);

        newFiles = newFiles.filter(
            (newFile) => !selectedFiles.map((file) => file.name).includes(newFile.name)
        );


        setSelectedFiles((oldFiles) => [...oldFiles, ...newFiles]);
    };

    const toggleFilePreview = () => {
        setIsPreviewOpen(!isPreviewOpen);
    };

    const uploadFiles = () => {
        selectedFiles.forEach((file) => {
            setFileProgress((prevProgress) => ({ ...prevProgress, [file.name]: 0 }));

            const formData = new FormData();
            formData.append("file", file);

            const xhr = new XMLHttpRequest();

            xhr.upload.onprogress = (event) => {
                if (event.lengthComputable) {
                    const progress = Math.round((event.loaded / event.total) * 100);
                    fileProgressRef.current[file.name] = progress;

                    const sumProgress = selectedFiles.reduce(
                        (total, current) => total + (fileProgressRef.current[current.name] || 0),
                        0
                    );
                    setOverallProgress(sumProgress / selectedFiles.length);
                }
            };

            xhr.onload = () => {
                if (xhr.status === 200) {
                    file.uploaded = true;
                    fileProgressRef.current[file.name] = 100;
                    setSelectedFiles([...selectedFiles]);
                }
            };

            xhr.onerror = () => {
                console.error('Error uploading ${file.name}');
            };

            xhr.open("POST", "/api/contact");
            xhr.send(formData);
        });
    };

    const removeFile = (fileToRemove) => {
        setSelectedFiles(selectedFiles.filter(file => file.name !== fileToRemove.name));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        formData.append('fileUpload', selectedFiles);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: formData
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

                <div className="flex flex-row gap-2 justify-center items-center dark:bg-black p-2 rounded-lg">
                    <input 
                      type="file"
                      id="fileUpload"
                      name="fileUpload"
                      accept=".jpg,.png,.jpeg,.gif"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <label htmlFor="fileUpload" onClick={uploadFiles} className="uploadLabel p-2 rounded-lg dark:bg-teal-950 cursor-pointer">
                        Upload files...
                    </label>
                    <div className="flex-grow">
                        <div className="h-2 w-full rounded-full bg-gray-500 overflow-hidden">
                            <div className="h-2 rounded-full bg-teal-500" style={{ width: `${overallProgress}%` }}></div>
                        </div>
                    </div>
                    {selectedFiles.length > 0 && 
                      <div className="card" onClick={toggleFilePreview}>
                        <span className="dark:bg-teal-950 p-2 rounded-lg cursor-pointer">Attachments</span>
                      </div>
                    }
                </div>
                {isPreviewOpen &&
                  <div className="flex flex-row gap-2 -mt-1 dark:bg-black p-4 rounded-lg">
                    {selectedFiles.map((file =>
                        <div key={file.name} className="text-left relative">
                          {file.type.includes('image') && <img src={URL.createObjectURL(file)} width="100" className="rounded-lg" />}
                          {file.type.includes('video') && <video src={URL.createObjectURL(file)} width="100" className="rounded-lg" />}
                          <button onClick={() => removeFile(file)} className="absolute -top-[10px] -right-[15px] p-[5px] rounded-3xl bg-orange-100 dark:bg-gray-900">
                            <IconContext.Provider value={{ className: "shared-class", size: 20 }}>
                                <LuX/>
                            </IconContext.Provider>
                          </button>
                          <p className={`text-gray-500 w-[100px] whitespace-nowrap overflow-hidden text-ellipsis`}>{file.name}</p>
                          <progress value={fileProgress[file.name] || 0} max="100" className="w-[100px] hidden"/>
                        </div>
                    ))}
                  </div>
                }

                <motion.button type="submit" className="p-2 dark:bg-teal-950 mt-2 dark:bg-opacity-10 bg-opacity-75 rounded-full dark:border-teal-950 border-orange-200 border-[3px]
                 bg-orange-100 dark:shadow-teal-950 shadow-orange-100 shadow-lg text-lg cursor-pointer"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    Send message
                </motion.button>
            </form>
        </main>
    )
}