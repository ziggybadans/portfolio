'use client';

import React, { ReactNode, useEffect } from "react";
import { ThemeProvider, useTheme } from "@wits/next-themes";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider attribute="class">
            {children}
        </ThemeProvider>
    )
}