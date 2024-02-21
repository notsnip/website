import type { Metadata } from "next";
import "./globals.css";
// import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { CommandMenu } from "~/components/navigation/command";

const geist = GeistSans;

export const metadata: Metadata = {
    title: "snipc",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({
    children,
}: RootLayoutProps): React.ReactElement {
    return (
        <html lang="en">
            <head>
                <meta
                    name="description"
                    content="I'm Shaurya Chaudhary, a full-stack develper from India who loves to code. You may find me as snipc online."
                />
            </head>
            <link
                rel="icon"
                type="image/x-icon"
                href="https://img.icons8.com/material-outlined/24/minecraft-dirt-block.png"
            ></link>
            <body
                className={`${geist.className} h-full scroll-smooth antialiased`}
            >
                <main>
                    <CommandMenu />
                    {children}
                </main>
            </body>
        </html>
    );
}
