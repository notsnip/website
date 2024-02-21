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
            "%c Hello Devs! Orignal Work: https://github.com/dromzeh. Maintained and Updated: https://github.com/realsnipc",
            "font-size: 12px; font-family: monospace; background: white; display: inline-block; color: black; padding: 12px; border-radius: 4px;",
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
                    developer from India who has been passionate about
                    programming since I was <AgeTooltip />.
                </p>
                <p>
                    I actively develop projects, which you can find on my{" "}
                    <Link
                        href="https://github.com/realsnipc"
                        target="_blank"
                        className="text-neutral-100 hover:text-neutral-500 transition-all duration-150"
                    >
                        GitHub
                    </Link>{" "}
                    profile. I love code but when I'm not wrangling code, you
                    can find me playing games or learning something.
                </p>
                <p>
                    Wanna chat? Hit me up on{" "}
                    <Link
                        href="https://discord.com/users/1019641343875760350"
                        target="_blank"
                        className="text-neutral-100 hover:text-neutral-500 transition-all duration-150"
                    >
                        Discord
                    </Link>{" "}
                    or send me an{" "}
                    <Link
                        href={`mailto:${EMAIL}`}
                        target="_blank"
                        className="text-neutral-100 hover:text-neutral-500 transition-all duration-150"
                    >
                        email
                    </Link>
                    .{" "}
                </p>

                <p>
                    And hey, if you're feeling curious, we can even schedule an{" "}
                    <Link
                        href="https://cal.com/snipc"
                        target="_blank"
                        className="text-neutral-100 hover:text-neutral-500 transition-all duration-150"
                    >
                        e-meet
                    </Link>{" "}
                    and talk tech (or maybe swap embarrassing coding stories)
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
