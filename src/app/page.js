"use client";

import Navbar from "../components/Navbar.jsx";

import styles from "../styles/Home.module.scss"

import headshot from "../../public/Headshot.png"

import Image from "next/image"

export default function Home() {
    return (
        <section className={`absolute min-h-screen min-w-full ${styles.background}`}>
            <main className={`flex flex-col items-center justify-center gap-[10px] ${styles.main}`}>
                <Navbar/>

                <div id="hero" className="text-3xl 2xl:text-4xl text-center w-full h-screen pt-[20vh] 2xl:pt-[17vh]">
                    <div className={`z-50 relative`}>
                        <span className={styles.subtitle}>Hi, I&apos;m </span><span className={`font-semibold ${styles.subtitle}`}>Ziggy Badans</span>
                    </div>
                    <div className="flex flex-col pt-[50px] ml-[15%] text-8xl 2xl:text-9xl text-left justify-center relative">
                        <span className={`z-50 h-full ${styles.title1}`}>Filmmaker</span>
                        <span className={`z-50 ${styles.title2}`}>& Photographer</span>
                        <div className="absolute right-0">
                            <Image src={headshot} width="64px" alt="" className="w-[600px]"></Image>
                            <div className="absolute -top-[95%] -right-[45%]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000" viewBox="0 0 1920 1080" fill="none" className="">
                                <g filter="url(#filter0_f_9_594)">
                                    <mask id="path-1-outside-1_9_594" maskUnits="userSpaceOnUse" x="100" y="100" width="1453" height="1069" fill="black">
                                    <rect fill="white" x="100" y="100" width="1453" height="1069"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1469 324C1469 246.68 1406.32 184 1329 184H324C246.68 184 184 246.68 184 324V944.873C184 1022.19 246.68 1084.87 324 1084.87H1329C1406.32 1084.87 1469 1022.19 1469 944.873V324ZM1281.29 439.977C1281.29 362.657 1218.61 299.977 1141.29 299.977H513.092C435.772 299.977 373.092 362.657 373.092 439.977V866.383C373.092 943.703 435.772 1006.38 513.092 1006.38H1141.29C1218.61 1006.38 1281.29 943.703 1281.29 866.383V439.977Z"/>
                                    </mask>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1469 324C1469 246.68 1406.32 184 1329 184H324C246.68 184 184 246.68 184 324V944.873C184 1022.19 246.68 1084.87 324 1084.87H1329C1406.32 1084.87 1469 1022.19 1469 944.873V324ZM1281.29 439.977C1281.29 362.657 1218.61 299.977 1141.29 299.977H513.092C435.772 299.977 373.092 362.657 373.092 439.977V866.383C373.092 943.703 435.772 1006.38 513.092 1006.38H1141.29C1218.61 1006.38 1281.29 943.703 1281.29 866.383V439.977Z" fill="url(#paint0_radial_9_594)"/>
                                    <path d="M324 268H1329V100H324V268ZM268 944.873V324H100V944.873H268ZM1329 1000.87H324V1168.87H1329V1000.87ZM1385 324V944.873H1553V324H1385ZM513.092 383.977H1141.29V215.977H513.092V383.977ZM457.092 866.383V439.977H289.092V866.383H457.092ZM1141.29 922.383H513.092V1090.38H1141.29V922.383ZM1197.29 439.977V866.383H1365.29V439.977H1197.29ZM1141.29 1090.38C1265 1090.38 1365.29 990.095 1365.29 866.383H1197.29C1197.29 897.311 1172.22 922.383 1141.29 922.383V1090.38ZM289.092 866.383C289.092 990.095 389.38 1090.38 513.092 1090.38V922.383C482.164 922.383 457.092 897.311 457.092 866.383H289.092ZM1141.29 383.977C1172.22 383.977 1197.29 409.049 1197.29 439.977H1365.29C1365.29 316.265 1265 215.977 1141.29 215.977V383.977ZM513.092 215.977C389.38 215.977 289.092 316.265 289.092 439.977H457.092C457.092 409.049 482.164 383.977 513.092 383.977V215.977ZM1329 1168.87C1452.71 1168.87 1553 1068.58 1553 944.873H1385C1385 975.801 1359.93 1000.87 1329 1000.87V1168.87ZM100 944.873C100 1068.58 200.288 1168.87 324 1168.87V1000.87C293.072 1000.87 268 975.8 268 944.873H100ZM1329 268C1359.93 268 1385 293.072 1385 324H1553C1553 200.288 1452.71 100 1329 100V268ZM324 100C200.288 100 100 200.288 100 324H268C268 293.072 293.072 268 324 268V100Z" fill="#F0DDC1" mask="url(#path-1-outside-1_9_594)"/>
                                </g>
                                <defs>
                                    <filter id="filter0_f_9_594" x="0" y="0" width="1653" height="1268.87" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="35" result="effect1_foregroundBlur_9_594"/>
                                    </filter>
                                    <radialGradient id="paint0_radial_9_594" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(827.215 648.565) rotate(91.2183) scale(705.869 1006.65)">
                                    <stop stop-color="#ECD0A5"/>
                                    <stop offset="1" stop-color="#EFE0C9"/>
                                    </radialGradient>
                                </defs>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex pt-[100px] justify-center items-start gap-[25px] mix-blend-overlay z-50">
                        <span className={`px-[32px] py-[8px] text-2xl border-4 rounded-full border-orange-500 bg-orange-50 shadow-xl`}>You need film help</span>
                        <span className={`px-[32px] py-[8px] text-2xl border-4 rounded-full border-teal-500 bg-teal-50 shadow-xl`}>You need photo help</span>
                    </div>
                </div>

                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit sed vulputate mi sit amet. Nunc congue nisi vitae suscipit tellus mauris a. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Laoreet id donec ultrices tincidunt arcu non sodales neque. Id donec ultrices tincidunt arcu non sodales. Id diam vel quam elementum pulvinar etiam non quam lacus. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Euismod elementum nisi quis eleifend quam adipiscing. Id porta nibh venenatis cras sed felis eget velit aliquet. Viverra aliquet eget sit amet tellus cras. Vel elit scelerisque mauris pellentesque pulvinar. Massa sed elementum tempus egestas sed sed risus.
                    Egestas sed tempus urna et pharetra pharetra massa. Feugiat vivamus at augue eget arcu. In tellus integer feugiat scelerisque. Vel turpis nunc eget lorem. Ut tellus elementum sagittis vitae et. Mattis pellentesque id nibh tortor id aliquet. Orci sagittis eu volutpat odio facilisis mauris sit. Dolor magna eget est lorem ipsum. Velit scelerisque in dictum non consectetur a erat. Porttitor leo a diam sollicitudin tempor id.
                    Eu mi bibendum neque egestas. Id cursus metus aliquam eleifend mi. Purus faucibus ornare suspendisse sed nisi lacus sed. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Volutpat blandit aliquam etiam erat. Nec sagittis aliquam malesuada bibendum arcu vitae. Scelerisque eu ultrices vitae auctor. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Tempus urna et pharetra pharetra. Viverra justo nec ultrices dui sapien eget mi proin sed. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Sapien et ligula ullamcorper malesuada.
                    Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Sed arcu non odio euismod lacinia at quis risus. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Ultrices vitae auctor eu augue ut lectus arcu. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Sit amet nulla facilisi morbi tempus. Sagittis orci a scelerisque purus semper eget duis at. Leo a diam sollicitudin tempor id eu. Mi in nulla posuere sollicitudin aliquam. Aliquam ut porttitor leo a diam sollicitudin tempor. Nulla aliquet enim tortor at auctor. Posuere ac ut consequat semper viverra nam libero.
                    Malesuada fames ac turpis egestas maecenas pharetra convallis. Donec et odio pellentesque diam volutpat commodo sed egestas. Enim facilisis gravida neque convallis a cras. Sapien faucibus et molestie ac feugiat sed lectus. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Justo donec enim diam vulputate ut pharetra sit amet. Adipiscing elit pellentesque habitant morbi. Gravida quis blandit turpis cursus in hac habitasse. Arcu non odio euismod lacinia. Tellus cras adipiscing enim eu turpis egestas. Odio euismod lacinia at quis risus sed vulputate.
                </span>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit sed vulputate mi sit amet. Nunc congue nisi vitae suscipit tellus mauris a. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Laoreet id donec ultrices tincidunt arcu non sodales neque. Id donec ultrices tincidunt arcu non sodales. Id diam vel quam elementum pulvinar etiam non quam lacus. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Euismod elementum nisi quis eleifend quam adipiscing. Id porta nibh venenatis cras sed felis eget velit aliquet. Viverra aliquet eget sit amet tellus cras. Vel elit scelerisque mauris pellentesque pulvinar. Massa sed elementum tempus egestas sed sed risus.
                    Egestas sed tempus urna et pharetra pharetra massa. Feugiat vivamus at augue eget arcu. In tellus integer feugiat scelerisque. Vel turpis nunc eget lorem. Ut tellus elementum sagittis vitae et. Mattis pellentesque id nibh tortor id aliquet. Orci sagittis eu volutpat odio facilisis mauris sit. Dolor magna eget est lorem ipsum. Velit scelerisque in dictum non consectetur a erat. Porttitor leo a diam sollicitudin tempor id.
                    Eu mi bibendum neque egestas. Id cursus metus aliquam eleifend mi. Purus faucibus ornare suspendisse sed nisi lacus sed. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Volutpat blandit aliquam etiam erat. Nec sagittis aliquam malesuada bibendum arcu vitae. Scelerisque eu ultrices vitae auctor. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Tempus urna et pharetra pharetra. Viverra justo nec ultrices dui sapien eget mi proin sed. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Sapien et ligula ullamcorper malesuada.
                    Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Sed arcu non odio euismod lacinia at quis risus. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Ultrices vitae auctor eu augue ut lectus arcu. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Sit amet nulla facilisi morbi tempus. Sagittis orci a scelerisque purus semper eget duis at. Leo a diam sollicitudin tempor id eu. Mi in nulla posuere sollicitudin aliquam. Aliquam ut porttitor leo a diam sollicitudin tempor. Nulla aliquet enim tortor at auctor. Posuere ac ut consequat semper viverra nam libero.
                    Malesuada fames ac turpis egestas maecenas pharetra convallis. Donec et odio pellentesque diam volutpat commodo sed egestas. Enim facilisis gravida neque convallis a cras. Sapien faucibus et molestie ac feugiat sed lectus. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Justo donec enim diam vulputate ut pharetra sit amet. Adipiscing elit pellentesque habitant morbi. Gravida quis blandit turpis cursus in hac habitasse. Arcu non odio euismod lacinia. Tellus cras adipiscing enim eu turpis egestas. Odio euismod lacinia at quis risus sed vulputate.
                </span>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit sed vulputate mi sit amet. Nunc congue nisi vitae suscipit tellus mauris a. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Laoreet id donec ultrices tincidunt arcu non sodales neque. Id donec ultrices tincidunt arcu non sodales. Id diam vel quam elementum pulvinar etiam non quam lacus. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Euismod elementum nisi quis eleifend quam adipiscing. Id porta nibh venenatis cras sed felis eget velit aliquet. Viverra aliquet eget sit amet tellus cras. Vel elit scelerisque mauris pellentesque pulvinar. Massa sed elementum tempus egestas sed sed risus.
                    Egestas sed tempus urna et pharetra pharetra massa. Feugiat vivamus at augue eget arcu. In tellus integer feugiat scelerisque. Vel turpis nunc eget lorem. Ut tellus elementum sagittis vitae et. Mattis pellentesque id nibh tortor id aliquet. Orci sagittis eu volutpat odio facilisis mauris sit. Dolor magna eget est lorem ipsum. Velit scelerisque in dictum non consectetur a erat. Porttitor leo a diam sollicitudin tempor id.
                    Eu mi bibendum neque egestas. Id cursus metus aliquam eleifend mi. Purus faucibus ornare suspendisse sed nisi lacus sed. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Volutpat blandit aliquam etiam erat. Nec sagittis aliquam malesuada bibendum arcu vitae. Scelerisque eu ultrices vitae auctor. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Tempus urna et pharetra pharetra. Viverra justo nec ultrices dui sapien eget mi proin sed. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Sapien et ligula ullamcorper malesuada.
                    Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Sed arcu non odio euismod lacinia at quis risus. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Ultrices vitae auctor eu augue ut lectus arcu. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Sit amet nulla facilisi morbi tempus. Sagittis orci a scelerisque purus semper eget duis at. Leo a diam sollicitudin tempor id eu. Mi in nulla posuere sollicitudin aliquam. Aliquam ut porttitor leo a diam sollicitudin tempor. Nulla aliquet enim tortor at auctor. Posuere ac ut consequat semper viverra nam libero.
                    Malesuada fames ac turpis egestas maecenas pharetra convallis. Donec et odio pellentesque diam volutpat commodo sed egestas. Enim facilisis gravida neque convallis a cras. Sapien faucibus et molestie ac feugiat sed lectus. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Justo donec enim diam vulputate ut pharetra sit amet. Adipiscing elit pellentesque habitant morbi. Gravida quis blandit turpis cursus in hac habitasse. Arcu non odio euismod lacinia. Tellus cras adipiscing enim eu turpis egestas. Odio euismod lacinia at quis risus sed vulputate.
                </span>
            </main>
            <div className={`min-h-screen min-w-full absolute top-0 left-0 opacity-50 z-50 ${styles.grain}`}>
            </div>
        </section>
    )
}