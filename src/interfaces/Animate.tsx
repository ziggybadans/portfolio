"use client"

import { PropsWithChildren, useContext, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime"

export function useLayoutRouterContext() {
    return useContext(LayoutRouterContext);
}

function FrozenRouter(props: PropsWithChildren<{}>) {
    const context = useLayoutRouterContext();
    const frozen = useRef(context).current;

    return (
        <LayoutRouterContext.Provider value={frozen}>
            {props.children}
        </LayoutRouterContext.Provider>
    );
}

export function Animate({ children }: PropsWithChildren) {
    const pathname = usePathname();

    const transition = { duration: 0.6, ease: "easeInOut" };

    return (
        <AnimatePresence initial={false} mode="popLayout">
            <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={transition}
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <FrozenRouter>{children}</FrozenRouter>
            </motion.div>
        </AnimatePresence>
    );
}