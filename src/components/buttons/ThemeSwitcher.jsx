import { useTheme } from "next-themes";
import styles from "../../styles/modules/navbar.module.scss"
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
    const { resolvedTheme, setTheme } = useTheme();

    const [ mounted, setMounted ] = useState(false);
    useEffect(() => setMounted(true), [])

    if (!mounted) {
        return null;
    }

    return (
        <button className={`flex px-[5px] py-[5px] justify-center items-center gap-[10px] rounded-3xl bg-teal-100 dark:bg-cyan-950`} 
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
                {resolvedTheme === 'dark' ? (  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 49 50" fill="none">
  <path d="M24.5003 35.2084C30.1382 35.2084 34.7087 30.6379 34.7087 25C34.7087 19.3621 30.1382 14.7917 24.5003 14.7917C18.8624 14.7917 14.292 19.3621 14.292 25C14.292 30.6379 18.8624 35.2084 24.5003 35.2084Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 2.54169V6.62502" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 43.375V47.4583" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.61621 9.11584L11.5154 12.015" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M37.4854 37.985L40.3845 40.8842" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.04199 25H6.12533" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M42.875 25H46.9583" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.61621 40.8842L11.5154 37.985" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M37.4854 12.015L40.3845 9.11584" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>  ) : (<svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="moon">
                        <path id="Vector" d="M43.3752 26.6129C43.054 30.0883 41.7497 33.4002 39.6149 36.1614C37.4801 38.9225 34.6031 41.0185 31.3206 42.2042C28.038 43.3899 24.4856 43.6162 21.0791 42.8566C17.6727 42.097 14.5529 40.383 12.085 37.9151C9.61714 35.4472 7.90312 32.3275 7.14356 28.921C6.38399 25.5145 6.61029 21.9622 7.79598 18.6796C8.98166 15.397 11.0777 12.52 13.8388 10.3852C16.5999 8.25045 19.9119 6.94617 23.3872 6.625C21.3526 9.37771 20.3734 12.7693 20.628 16.1829C20.8826 19.5965 22.3539 22.8053 24.7744 25.2258C27.1948 27.6463 30.4037 29.1176 33.8173 29.3722C37.2309 29.6267 40.6225 28.6476 43.3752 26.6129Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    </svg>)}
        </button>
    )
};

export default ThemeSwitcher;