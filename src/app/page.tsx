import { About } from "~/components/main/about";
import { LanyardProfile } from "~/components/main/lanyard/profile";
import type { Metadata } from "next";
import { MoreInfo } from "~/components/main/detail";
import { WorkContainer } from "~/components/work/work-container";
import UIPage from "~/components/ui/ui-page";

export const metadata: Metadata = {
    title: "notsnipc",
};

export default function Home() {
    return (
        <UIPage>
                    <LanyardProfile />
                    <About />
                    {/* <WorkContainer /> */}
                    <MoreInfo />
        </UIPage>
    );
}
