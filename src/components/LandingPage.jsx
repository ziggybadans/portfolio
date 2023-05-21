import styles from "../styles/modules/LandingPage.module.scss";
import { UserContext } from "../../hooks/UserContext.Provider";
import { useContext } from "react";
import Link from 'next/link';

const ScrollButton = ({ target, heading, children }) => {
  const handleClick = () => {
    document.querySelector(target).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button onClick={handleClick}>
      <div className="buttonbg bg-white p-4 rounded-lg shadow-md hover:bg-gray-200">
        <h2 className="text-xl font-semibold mb-2">{heading}</h2>
        <p>{children}</p>
      </div>
    </button>
  );
};

export default function LandingPage() {
  const user = useContext(UserContext);
  return (
    <div className={styles.home}>
      <h1 className="text-5xl font-bold mb-4">Ziggy Badans</h1>
      <p className="text-lg mb-8">A silly little portfolio page.</p>
      <div className={styles.buttons}>
        <ScrollButton target="#photography" heading="Photography">
          View my photography work.
        </ScrollButton>
        <ScrollButton target="#cinematography" heading="Cinematography">
          View my cinematography work.
        </ScrollButton>
      </div>
      <div className={`mt-4 ${user ? "" : "hidden"}`}>
      <Link href="/podcast">
        <button>
          <div className="buttonbg bg-white p-4 rounded-lg shadow-md hover:bg-gray-200">
            <h2 className="text-xl font-semibold mb-2">Podcast Members Area</h2>
            <p>Area to submit ratings for graphic design.</p>
          </div>
        </button>
      </Link>
      </div>

      <p className={`${styles.betanotice} text-center mt-6 text-gray-500`}>
        This is just a beta website while I set up a proper navigation.
      </p>
    </div>
  );
}
