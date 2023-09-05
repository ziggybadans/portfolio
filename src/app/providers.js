"use client"

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function Providers( { children }) {
    return <ThemeProvider attribute="class">{children}</ThemeProvider>
}