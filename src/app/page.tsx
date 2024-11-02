import { About } from "~/components/main/about";
import { LanyardProfile } from "~/components/main/lanyard/profile";
import type { Metadata } from "next";
import { MoreInfo } from "~/components/main/detail";
// import { WorkContainer } from "~/components/work/work-container";
import BlurFade from "~/components/ui/blur-fade";
import UIPage from "~/components/ui/ui-page";

export const metadata: Metadata = {
    title: "notsnip - Shaurya Chaudhary",
};

export default function Home() {
    return (
        <UIPage>
             <BlurFade delay={0.25} inView>
                    <LanyardProfile />
                    <About />
                    {/* <WorkContainer /> */}
                    <MoreInfo />
                    </BlurFade>
        </UIPage>
    );
}
