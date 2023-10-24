import { useTheme } from "next-themes";
import styles from "../../styles/modules/navbar.module.scss"
import { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import { LuMoonStar, LuMoon, LuSun } from "react-icons/lu"

const ThemeSwitcher = () => {
    const { resolvedTheme, setTheme } = useTheme();

    const [ mounted, setMounted ] = useState(false);
    useEffect(() => setMounted(true), [])

    if (!mounted) {
        return null;
    }

    return (
        <button className={`flex p-[7px] justify-center items-center gap-[10px] rounded-3xl bg-teal-100 dark:bg-cyan-950 transition-all`} 
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
                {resolvedTheme === 'dark' ? ( 
                    <IconContext.Provider value={{ className: "shared-class", size: 22 }}>
                        <LuSun/>
                    </IconContext.Provider> 
                ) : ( 
                    <IconContext.Provider value={{ className: "shared-class", size: 22 }}>
                        <LuMoon/>
                    </IconContext.Provider> 
                )}
        </button>
    )
};

export default ThemeSwitcher;