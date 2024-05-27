import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import SideBar from "@/app/components/SideBar";
import React from "react";
import {SideBarStateProvider} from "@/app/components/SidebarStateProvider";
import {PetInfoStateProvider} from "@/app/petcatchers/components/PetInfoStateProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Modding with Nyfaria",
    description: "A website for the Mod Developer Nyfaria.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <SideBarStateProvider>
            <PetInfoStateProvider>
                {children}
            </PetInfoStateProvider>
            <SideBar/>
        </SideBarStateProvider>
        </body>
        </html>
    );
}
