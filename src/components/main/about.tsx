"use client";
import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "../ui/tooltip";
import dayjs from "dayjs";
import * as React from "react";
import { EMAIL } from "../../data/config";

const ageDateTimestamp = "2009-02-09T00:00:00Z";
const fallBackAge = 15;

export function About() {
    React.useEffect(() => {
        console.log(
            "%c Credits: ",
            "font-size: 12px; font-family: monospace; background: black; display: inline-block; color: white; padding: 12px; border-radius: 4px;",
        );
    }, []);

    return (
        <div className="">
            <h2 className="text-neutral-100 font-bold text-lg mb-2">
                About Me
            </h2>
            <div className="flex flex-col space-y-2">
                <p>
                    Hey, I&apos;m Shaurya - <Age /> year old full-stack
                    developer from India.
                </p>
                <p>
                    I started programming when I was <AgeTooltip />. All my
                    active projects are available on my{" "}
                    <Link
                        href="https://github.com/realsnipc"
                        target="_blank"
                        className="text-neutral-100 hover:text-neutral-500 transition-all duration-150"
                    >
                        GitHub
                    </Link>
                    .
                </p>
                <p>
                    I love code but when I'm not wrangling code, you can find me
                    playing games or learning something.
                    {/* <Link
                        href="https://wanderer.moe/"
                        target="_blank"
                        className="text-neutral-100 hover:text-neutral-500 transition-all duration-150"
                    >
                        wanderer.moe
                    </Link> */}
                </p>
                <p>
                    You can contact me through{" "}
                    <Link
                        href="https://discord.com/users/1019641343875760350"
                        target="_blank"
                        className="text-neutral-100 hover:text-neutral-500 transition-all duration-150"
                    >
                        Discord
                    </Link>
                    {""} or {""}
                    <Link
                        href={`mailto:${EMAIL}`}
                        target="_blank"
                        className="text-neutral-100 hover:text-neutral-500 transition-all duration-150"
                    >
                        Mail
                    </Link>
                    . I'm also open for scheduling a{" "}
                    <Link
                        href="https://cal.com/snipc"
                        target="_blank"
                        className="text-neutral-100 hover:text-neutral-500 transition-all duration-150"
                    >
                        e-meet
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
}

export function AgeTooltip() {
    return (
        <TooltipProvider delayDuration={100}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <span className="text-neutral-100 hover:text-neutral-500 transition-all duration-150 cursor-pointer">
                        12 years old
                    </span>
                </TooltipTrigger>
                <TooltipContent className="text-center max-w-[250px]">
                    <p>Got my first HTML page running on browser.</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

export function Age() {
    const [age, setAge] = React.useState<number>(fallBackAge);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setAge(dayjs().diff(ageDateTimestamp, "year", true));
        }, 50);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <TooltipProvider delayDuration={100}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <span className="text-neutral-100 hover:text-neutral-500 transition-all duration-150 cursor-pointer">
                        {age.toFixed(4)}
                    </span>
                </TooltipTrigger>
                <TooltipContent className="text-center max-w-[250px]">
                    <p>{age.toFixed(12)}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
