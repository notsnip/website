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
            <link rel="icon" type="image/x-icon" href="/favicon.webp"></link>
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
