import { ChevronRight } from "lucide-react";
import Link from "next/link";

const time= new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata" })

export function MoreInfo() {
    return (
        <div>
            <h2 className="text-neutral-100 font-bold text-lg mb-2">
                More Info
            </h2>
            <ul className="pl-4 list-disc">
             <MoreInfoItem question="Timezone" answer="lol" />
                <MoreInfoItem question="Languages" answer="JS, TS, Python" />
                <MoreInfoItem
                    question="Technologies"
                    answer="React.js, Next.js"
                />
                <MoreInfoItem
                    question="Open to Work"
                    answer="Feel free to reach out."
                    link="https://snipc.me"
                />
            </ul>
        </div>
    );
}

function MoreInfoItem({
    question,
    answer,
    link,
}: {
    question: string;
    answer: any;
    link: string;
}) {
    return (
        <Link href={link}>
            <li className="mb-2">
                <span className="text-white">{question}</span>{" "}
                <ChevronRight className="h-3 w-3 text-gray-500 inline" />
                <span>{answer}</span>
            </li>
        </Link>
    );
}

MoreInfoItem.defaultProps = {
    question: "",
    answer: "",
    link: "/",
};
