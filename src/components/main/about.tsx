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
import { EMAIL,DISCORD_UID,GITHUB,EMEET_URL} from "../../data/config";

const ageDateTimestamp = "2009-02-09T00:00:00Z";
const fallBackAge = 16;

export function About() {
    React.useEffect(() => {
        console.log(
            "%c Heey Devs, I'm Shaurya.",
            "font-size: 12px; font-family: monospace; background: white; display: inline-block; color: black; padding: 12px; border-radius: 4px;",
        );
    }, []);

    return (
        <div className="mb-1">
            <h2 className="text-neutral-100 font-bold text-lg mb-2">
                About Me
            </h2>
            <div className="flex flex-col space-y-2">
                <p>Cooking..</p>
                {/* <p>
                    Hey, I&apos;m Shaurya - <Age /> year old no-stack
                    developer from India who has been passionate about
                    programming since I was <AgeTooltip />.
                </p>
                <p>
                    Whenever I'm free I try to learn something interesting, you can find my projects on my{" "}
                    <Link
                        href={`${GITHUB}`}
                        target="_blank"
                        className="text-neutral-100 hover:text-neutral-500 transition-all duration-150"
                    >
                        GitHub
                    </Link>{" "}
                    profile. I also enjoy playing video games or watching youtube.
                </p>
                <p>
                    {" "}
                    <Link
                        href={`${DISCORD_UID}`}
                        target="_blank"
                        className="text-neutral-100 hover:text-neutral-500 transition-all duration-150"
                    >
                        Discord
                    </Link>.{" "}
                {" "} 
                    <Link
                        href={`https://linkedin.com/in/realshaurya`}
                        target="_blank"
                        className="text-neutral-100 hover:text-neutral-500 transition-all duration-150"
                    >
                        Linkedin
                    </Link>
                    .{" "} - I'm onto something. Not Available '27
                </p> */}
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
                    <p>Got my first HTML page running on browser in 2021.</p>
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
