"use client";

import { useTheme } from "next-themes";
import styles from "../styles/Home.module.scss";
import headshot from "../../public/Headshot.png";
import Image from "next/image";
import Link from "next/link.js";
import Navbar from "../components/Navbar";

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <section
      className={`bg-gradient-radial dark:bg-black dark:bg-dark-gradient-radial absolute top-0 left-0 w-full h-full transition-all`}
    >
      <div className={`mt-[20px] mb-[75px] lg:mb-[100px] flex flex-col items-center`}>
        <Navbar />
      </div>
      <main
        className={`flex flex-col items-center justify-center gap-[10px] w-full ${styles.main}`}
      >
        <div
          id="hero"
          className="text-3xl 2xl:text-4xl text-center w-full lg:mt-[13%] 2xl:mt-[10%]"
        >
          <div className={`z-50 relative`}>
            <span className={styles.subtitle}>Hi, I&apos;m </span>
            <span className={`font-semibold ${styles.subtitle}`}>
              Ziggy Badans
            </span>
          </div>
          <div className="flex flex-col lg:pt-[50px] lg:ml-[15%] text-8xl 2xl:text-9xl text-left lg:items-start items-center justify-center relative">
            <div className="flex flex-row lg:gap-6 gap-3">
              <span className={`z-50 h-full max-lg:text-6xl ${styles.title1}`}>Filmmaker</span>
              <span className={`z-50 lg:hidden block max-lg:text-6xl ${styles.and2}`}>&</span>
            </div>
            <div className="flex flex-row gap-6">
              <span className={`z-50 hidden lg:block max-lg:text-6xl ${styles.and1}`}>&</span>
              <span className={`z-50 lg:-mt-[20px] -mt-[34px] max-lg:text-6xl ${styles.title2}`}>Photographer</span>
            </div>
            <div className="absolute lg:-right-0 lg:-top-20 top-60">
              <Image src={headshot} width="64px" alt="" className="w-[600px]" />
              <div id="hero-mask" className="absolute lg:-top-[95%] lg:-right-[45%] max-lg:hidden transition-all">
                {resolvedTheme === "light" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1000"
                    height="1000"
                    viewBox="0 0 1920 1080"
                    fill="none"
                    className=""
                  >
                    <g filter="url(#filter0_f_9_594)">
                      <mask
                        id="path-1-outside-1_9_594"
                        maskUnits="userSpaceOnUse"
                        x="100"
                        y="100"
                        width="1453"
                        height="1069"
                        fill="black"
                      >
                        <rect
                          fill="white"
                          x="100"
                          y="100"
                          width="1453"
                          height="1069"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1469 324C1469 246.68 1406.32 184 1329 184H324C246.68 184 184 246.68 184 324V944.873C184 1022.19 246.68 1084.87 324 1084.87H1329C1406.32 1084.87 1469 1022.19 1469 944.873V324ZM1281.29 439.977C1281.29 362.657 1218.61 299.977 1141.29 299.977H513.092C435.772 299.977 373.092 362.657 373.092 439.977V866.383C373.092 943.703 435.772 1006.38 513.092 1006.38H1141.29C1218.61 1006.38 1281.29 943.703 1281.29 866.383V439.977Z"
                        />
                      </mask>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1469 324C1469 246.68 1406.32 184 1329 184H324C246.68 184 184 246.68 184 324V944.873C184 1022.19 246.68 1084.87 324 1084.87H1329C1406.32 1084.87 1469 1022.19 1469 944.873V324ZM1281.29 439.977C1281.29 362.657 1218.61 299.977 1141.29 299.977H513.092C435.772 299.977 373.092 362.657 373.092 439.977V866.383C373.092 943.703 435.772 1006.38 513.092 1006.38H1141.29C1218.61 1006.38 1281.29 943.703 1281.29 866.383V439.977Z"
                        fill="url(#paint0_radial_9_594)"
                      />
                      <path
                        d="M324 268H1329V100H324V268ZM268 944.873V324H100V944.873H268ZM1329 1000.87H324V1168.87H1329V1000.87ZM1385 324V944.873H1553V324H1385ZM513.092 383.977H1141.29V215.977H513.092V383.977ZM457.092 866.383V439.977H289.092V866.383H457.092ZM1141.29 922.383H513.092V1090.38H1141.29V922.383ZM1197.29 439.977V866.383H1365.29V439.977H1197.29ZM1141.29 1090.38C1265 1090.38 1365.29 990.095 1365.29 866.383H1197.29C1197.29 897.311 1172.22 922.383 1141.29 922.383V1090.38ZM289.092 866.383C289.092 990.095 389.38 1090.38 513.092 1090.38V922.383C482.164 922.383 457.092 897.311 457.092 866.383H289.092ZM1141.29 383.977C1172.22 383.977 1197.29 409.049 1197.29 439.977H1365.29C1365.29 316.265 1265 215.977 1141.29 215.977V383.977ZM513.092 215.977C389.38 215.977 289.092 316.265 289.092 439.977H457.092C457.092 409.049 482.164 383.977 513.092 383.977V215.977ZM1329 1168.87C1452.71 1168.87 1553 1068.58 1553 944.873H1385C1385 975.801 1359.93 1000.87 1329 1000.87V1168.87ZM100 944.873C100 1068.58 200.288 1168.87 324 1168.87V1000.87C293.072 1000.87 268 975.8 268 944.873H100ZM1329 268C1359.93 268 1385 293.072 1385 324H1553C1553 200.288 1452.71 100 1329 100V268ZM324 100C200.288 100 100 200.288 100 324H268C268 293.072 293.072 268 324 268V100Z"
                        fill="#F0DDC1"
                        mask="url(#path-1-outside-1_9_594)"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_9_594"
                        x="0"
                        y="0"
                        width="1653"
                        height="1268.87"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="35"
                          result="effect1_foregroundBlur_9_594"
                        />
                      </filter>
                      <radialGradient
                        id="paint0_radial_9_594"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(827.215 648.565) rotate(91.2183) scale(705.869 1006.65)"
                      >
                        <stop stopColor="#ECD0A5" />
                        <stop offset="1" stopColor="#EFE0C9" />
                      </radialGradient>
                    </defs>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1000"
                    height="1000"
                    viewBox="0 0 1920 1080"
                    fill="none"
                  >
                    <g filter="url(#filter0_f_17_586)">
                      <mask
                        id="path-1-outside-1_17_586"
                        maskUnits="userSpaceOnUse"
                        x="100"
                        y="100"
                        width="1469"
                        height="1069"
                        fill="black"
                      >
                        <rect
                          fill="white"
                          x="100"
                          y="100"
                          width="1469"
                          height="1069"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1485 387C1485 274.886 1394.11 184 1282 184H387C274.886 184 184 274.886 184 387V881.873C184 993.986 274.886 1084.87 387 1084.87H1282C1394.11 1084.87 1485 993.986 1485 881.873V387ZM1294.95 502.977C1294.95 390.863 1204.06 299.977 1091.95 299.977H578.446C466.332 299.977 375.446 390.863 375.446 502.977V803.383C375.446 915.497 466.332 1006.38 578.446 1006.38H1091.95C1204.06 1006.38 1294.95 915.497 1294.95 803.383V502.977Z"
                        />
                      </mask>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1485 387C1485 274.886 1394.11 184 1282 184H387C274.886 184 184 274.886 184 387V881.873C184 993.986 274.886 1084.87 387 1084.87H1282C1394.11 1084.87 1485 993.986 1485 881.873V387ZM1294.95 502.977C1294.95 390.863 1204.06 299.977 1091.95 299.977H578.446C466.332 299.977 375.446 390.863 375.446 502.977V803.383C375.446 915.497 466.332 1006.38 578.446 1006.38H1091.95C1204.06 1006.38 1294.95 915.497 1294.95 803.383V502.977Z"
                        fill="url(#paint0_radial_17_586)"
                      />
                      <path
                        d="M387 268H1282V100H387V268ZM268 881.873V387H100V881.873H268ZM1282 1000.87H387V1168.87H1282V1000.87ZM1401 387V881.873H1569V387H1401ZM578.446 383.977H1091.95V215.977H578.446V383.977ZM459.446 803.383V502.977H291.446V803.383H459.446ZM1091.95 922.383H578.446V1090.38H1091.95V922.383ZM1210.95 502.977V803.383H1378.95V502.977H1210.95ZM1091.95 1090.38C1250.46 1090.38 1378.95 961.889 1378.95 803.383H1210.95C1210.95 869.105 1157.67 922.383 1091.95 922.383V1090.38ZM291.446 803.383C291.446 961.889 419.94 1090.38 578.446 1090.38V922.383C512.724 922.383 459.446 869.105 459.446 803.383H291.446ZM1091.95 383.977C1157.67 383.977 1210.95 437.255 1210.95 502.977H1378.95C1378.95 344.471 1250.46 215.977 1091.95 215.977V383.977ZM578.446 215.977C419.941 215.977 291.446 344.471 291.446 502.977H459.446C459.446 437.255 512.724 383.977 578.446 383.977V215.977ZM1282 1168.87C1440.51 1168.87 1569 1040.38 1569 881.873H1401C1401 947.594 1347.72 1000.87 1282 1000.87V1168.87ZM100 881.873C100 1040.38 228.494 1168.87 387 1168.87V1000.87C321.278 1000.87 268 947.594 268 881.873H100ZM1282 268C1347.72 268 1401 321.278 1401 387H1569C1569 228.494 1440.51 100 1282 100V268ZM387 100C228.494 100 100 228.494 100 387H268C268 321.278 321.278 268 387 268V100Z"
                        fill="#0b2732"
                        mask="url(#path-1-outside-1_17_586)"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_17_586"
                        x="0"
                        y="0"
                        width="1669"
                        height="1268.87"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="45"
                          result="effect1_foregroundBlur_17_586"
                        />
                      </filter>
                      <radialGradient
                        id="paint0_radial_17_586"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(835.224 648.565) rotate(91.2335) scale(705.873 1019.18)"
                      >
                        <stop stop-color="#195c5d" />``
                        <stop offset="1" stop-color="#090C1D" />
                      </radialGradient>
                    </defs>
                  </svg>
                )}
              </div>
            </div>
            <span className="text-xl opacity-50 mt-3 lg:mt-0">
              based in Sydney, Australia
            </span>
          </div>

          <div className="invisible flex mt-[150px] justify-center items-start gap-[25px] mix-blend-overlay dark:mix-blend-normal z-[60]">
            <button
              className={`px-[32px] py-[8px] text-2xl border-4 rounded-full 
            border-orange-500 bg-orange-50 dark:bg-amber-950 dark:bg-opacity-50 shadow-xl dark:shadow-amber-950 dark:shadow-lg cursor-pointer`}
            >
              <Link href="/films">You need film help</Link>
            </button>

            <span
              className={`px-[32px] py-[8px] text-2xl border-4 rounded-full 
            border-teal-500 bg-teal-50 dark:bg-teal-950 dark:bg-opacity-50 shadow-xl dark:shadow-teal-950 dark:shadow-lg`}
            >
              You need photo help
            </span>
          </div>
        </div>
        <div className={`min-h-screen min-w-full absolute top-0 left-0 z-50 ${styles.grain} opacity-50 dark:opacity-100 dark:mix-blend-soft-light`}/>
      </main>
    </section>
  );
}
