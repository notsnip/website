import { About } from "~/components/main/about";
import { LanyardProfile } from "~/components/main/lanyard/profile";
import type { Metadata } from "next"; 
import BlurFade from "~/components/ui/blur-fade";
import UIPage from "~/components/ui/ui-page";

export const metadata: Metadata = {
    title: "notsnip",
};

export default function Home() {
    return (
        <UIPage>
             <BlurFade delay={0.12} blur="2px" inView>
                    <LanyardProfile />
                    <About />
            </BlurFade>
        </UIPage>
    );
}
